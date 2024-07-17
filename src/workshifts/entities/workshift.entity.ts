import { ApiProperty } from "@nestjs/swagger";
import { Staff, WorkShift } from "@prisma/client";

export class WorkshiftEntity implements WorkShift {
  @ApiProperty()
  id: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  startTime: Date;

  @ApiProperty()
  endTime: Date;

  @ApiProperty()
  staff: Staff[];
}
