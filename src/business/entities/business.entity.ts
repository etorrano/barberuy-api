import { ApiProperty } from "@nestjs/swagger";
import { Business } from "@prisma/client";

export class BusinessEntity implements Business {
  @ApiProperty()
  id: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  name: string;

  @ApiProperty()
  key: string;
}
