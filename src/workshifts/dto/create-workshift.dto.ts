import { ApiProperty } from "@nestjs/swagger";

export class CreateWorkshiftDto {
  @ApiProperty()
  startTime: string;

  @ApiProperty()
  endTime: string;
}
