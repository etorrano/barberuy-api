import { ApiProperty } from "@nestjs/swagger";

export class CreateServiceDto {
  @ApiProperty()
  key: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  cost: number;

  @ApiProperty()
  duration: number; //minutes

  @ApiProperty()
  durationSteps: number[]; //minutes

  @ApiProperty()
  salesPointId: number;
}
