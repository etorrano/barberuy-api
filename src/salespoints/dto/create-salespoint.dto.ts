import { ApiProperty } from "@nestjs/swagger";

export class CreateSalespointDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  street: string;

  @ApiProperty()
  streetNumber: string;

  @ApiProperty()
  floor: string;

  @ApiProperty()
  companyId: number;
}
