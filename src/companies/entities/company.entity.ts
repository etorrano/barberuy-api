import { ApiProperty } from "@nestjs/swagger";
import { Company } from "@prisma/client";

export class CompanyEntity implements Company {
  @ApiProperty()
  id: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  name: string;

  @ApiProperty()
  companyName: string;

  @ApiProperty()
  RUT: number;
}
