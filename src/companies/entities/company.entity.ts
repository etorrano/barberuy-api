import { ApiProperty } from "@nestjs/swagger";
import { Business, Company, SalesPoint } from "@prisma/client";

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

  @ApiProperty()
  business: Business[];

  @ApiProperty()
  salesPoints: SalesPoint[];
}
