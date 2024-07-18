import { ApiProperty } from "@nestjs/swagger";
import { Admin, SalesPoint, Service } from "@prisma/client";

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

  @ApiProperty()
  services: Service[];

  @ApiProperty()
  admins: Admin[];
}
