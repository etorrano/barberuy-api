import { ApiProperty } from "@nestjs/swagger";

export class CreateWorkshiftDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  startTime: string;

  @ApiProperty()
  endTime: string;
}
