import { ApiProperty } from "@nestjs/swagger";
import { Admin, SalesPoint, Staff, StaffService } from "@prisma/client";

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
  floor: string | null;

  @ApiProperty()
  companyId: number;

  @ApiProperty()
  admins: Admin[];

  @ApiProperty()
  staff: Staff[];

  @ApiProperty()
  staffServices: StaffService[];
}
