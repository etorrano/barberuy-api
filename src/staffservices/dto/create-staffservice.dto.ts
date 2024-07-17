import { ApiProperty } from "@nestjs/swagger";

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
  serviceSalesPointId: number;

  @ApiProperty()
  scheduleId: number;
}
