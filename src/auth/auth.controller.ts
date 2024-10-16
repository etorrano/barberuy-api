import { Controller, Post, Body } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserType } from "./auth.model";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("login")
  async login(@Body() req) {
    return this.authService.login(req);
  }

  @Post("register")
  async register(@Body() req) {
    return this.authService.register(
      req.name,
      req.email,
      req.password,
      req.type || UserType.CLIENT,
      req.salesPoints || []
    );
  }
}
