import { ApiProperty } from "@nestjs/swagger";
import { SalesPoint } from "@prisma/client";
import { UserRole } from "../auth.model";

export class CreateUserDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  key: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  role: UserRole;

  @ApiProperty()
  salesPoints?: { id: number }[];
}
