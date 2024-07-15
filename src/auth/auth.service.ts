import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { PrismaService } from "./prisma.service";
import { UserType } from "./auth.model";
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
    email: string,
    pass: string,
    type: UserType = UserType.CLIENT,
    salesPoints: SalesPoint[] = []
  ) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(pass, salt);

    try {
      const userData = {
        email,
        password: hashedPassword,
      };
      let user;
      switch (type) {
        case UserType.CLIENT:
          user = await this.prisma.client.create({
            data: {
              user: {
                create: userData,
              },
            },
          });
          break;
        case UserType.ADMIN:
          user = await this.prisma.admin.create({
            data: {
              user: {
                create: userData,
              },
              salesPoints: {
                connect: salesPoints.map((sp) => ({ id: sp.id })),
              },
            },
          });
          break;
        case UserType.STAFF:
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
      console.log("Error");
      return error;
    }
  }
}
