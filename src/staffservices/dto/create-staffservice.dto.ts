import { ApiProperty } from "@nestjs/swagger";
import { Schedule } from "@prisma/client";

export class CreateStaffserviceDto {
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
  schedules: { id: number }[];
}
