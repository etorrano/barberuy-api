import { ApiProperty } from "@nestjs/swagger";

export class CreateCompanyDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  companyName: string;

  @ApiProperty()
  RUT: number;

  @ApiProperty()
  business: { id: number }[];
}
