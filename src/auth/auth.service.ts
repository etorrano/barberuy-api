import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { PrismaService } from "../database/prisma.service";
import { UserRole } from "./auth.model";
import { SalesPoint } from "@prisma/client";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private prisma: PrismaService
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(
    name: string,
    email: string,
    pass: string,
    role: UserRole = UserRole.CLIENT,
    salesPoints: { id: number }[] = []
  ) {
    const duplicatedUser = await this.prisma.user.findUnique({
      where: { email },
    });
    if (duplicatedUser) {
      throw new HttpException(
        "Ya existe un usuario registrado con el mismo correo",
        HttpStatus.BAD_REQUEST
      );
    } else {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(pass, salt);

      try {
        const userData = {
          name,
          email,
          password: hashedPassword,
          role,
        };
        let user;
        switch (role) {
          case UserRole.CLIENT:
            user = await this.prisma.client.create({
              data: {
                user: {
                  create: userData,
                },
              },
            });
            break;
          case UserRole.ADMIN:
            user = await this.prisma.admin.create({
              data: {
                user: {
                  create: userData,
                },
                salesPoints: {
                  connect: salesPoints,
                },
              },
            });
            break;
          case UserRole.STAFF:
            user = await this.prisma.staff.create({
              data: {
                user: {
                  create: userData,
                },
                salesPoints: {
                  connect: salesPoints,
                },
              },
            });
            break;
        }
        return {
          userId: user.userId,
          email: user.userEmail,
          name: user.userName,
        };
      } catch (error) {
        console.log("Error ", error);
        return error;
      }
    }
  }

  findAll(role?: UserRole) {
    return this.prisma.user.findMany({
      omit: {
        password: true,
      },
      where: { 
        active: { equals: true },
        ... role && { role },
      },
    });
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id, active: { equals: true } },
    });
  }

  update(id: number, updateBusinessDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: updateBusinessDto,
    });
  }

  remove(id: number) {
    return this.prisma.user.update({ where: { id }, data: { active: false } });
  }
}
