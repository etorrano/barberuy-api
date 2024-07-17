import { ApiProperty } from "@nestjs/swagger";

export class CreateWorkshiftDto {
  @ApiProperty()
  startTime: Date;

  @ApiProperty()
  endTime: Date;
}
