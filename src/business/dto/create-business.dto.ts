import { ApiProperty } from "@nestjs/swagger";

export class CreateBusinessDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  key: string;
}
