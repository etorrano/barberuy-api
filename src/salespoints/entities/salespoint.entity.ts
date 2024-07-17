import { ApiProperty } from "@nestjs/swagger";
import { SalesPoint } from "@prisma/client";

export class SalespointEntity implements SalesPoint {
  @ApiProperty()
  id: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  name: string;

  @ApiProperty()
  street: string;

  @ApiProperty()
  streetNumber: string;

  @ApiProperty()
  floor: string;

  @ApiProperty()
  companyId: number;
}
