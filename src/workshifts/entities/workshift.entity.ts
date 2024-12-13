import { ApiProperty } from "@nestjs/swagger";
import { Staff, WorkShift } from "@prisma/client";
import { Days } from "../workshift.model";

export class WorkshiftEntity implements WorkShift {
  @ApiProperty()
  id: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  days: Days[];

  @ApiProperty()
  title: string;

  @ApiProperty()
  startTime: string;

  @ApiProperty()
  endTime: string;

  @ApiProperty()
  staff: Staff[];
}
