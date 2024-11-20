import { ApiProperty } from "@nestjs/swagger";
import { StaffService } from "@prisma/client";

export class StaffserviceEntity implements StaffService {
  @ApiProperty()
  id: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  staffId: number;

  @ApiProperty()
  staffEmail: string;

  @ApiProperty()
  staffName: string;

  @ApiProperty()
  serviceId: number;

  @ApiProperty()
  serviceName: string;

  @ApiProperty()
  salesPointId: number;

  @ApiProperty()
  salesPointName: string;

  @ApiProperty()
  serviceSalesPointId: number;

  @ApiProperty()
  scheduleId: number;
}
