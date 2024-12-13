import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserRole } from "./auth.model";
import { UpdateUserDto } from "./dto/update-user.dto";

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
      req.role || UserRole.CLIENT,
      req.salesPoints || []
    );
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get("/clients")
  findAllClients() {
    return this.authService.findAll(UserRole.CLIENT);
  }

  @Get("/staff")
  findAllStaff() {
    return this.authService.findAll(UserRole.STAFF);
  }

  @Get("/admins")
  findAllAdmins() {
    return this.authService.findAll(UserRole.ADMIN);
  }

  @Get("/super-admins")
  findAllSuperAdmins() {
    return this.authService.findAll(UserRole.SUPERADMIN);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.authService.update(+id, updateUserDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.authService.remove(+id);
  }
}
