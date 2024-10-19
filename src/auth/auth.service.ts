import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { PrismaService } from "../database/prisma.service";
import { UserRole } from "./auth.model";
import { SalesPoint } from "@prisma/client";

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

  findAll() {
    return this.prisma.user.findMany({
      omit: {
        password: true,
      },
    });
  }
}
