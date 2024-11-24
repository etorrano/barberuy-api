import { ApiProperty } from "@nestjs/swagger";

export class CreateSalespointDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  street: string;

  @ApiProperty()
  streetNumber: string;

  @ApiProperty()
  floor: string | null;

  @ApiProperty()
  companyId: number;

  @ApiProperty()
  admins: { id: number }[];

  @ApiProperty()
  staff: { id: number }[];

  @ApiProperty()
  staffServices: { id: number }[];
}
