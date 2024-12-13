import { ApiProperty } from "@nestjs/swagger";
import { SalesPoint } from "@prisma/client";

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
  durationSteps: number[];

  @ApiProperty()
  salespoints: SalesPoint[];
  
  @ApiProperty()
  salesPointsStaff: { salesPointId: number, salesPointStaff: string[] }[];

  @ApiProperty()
  promotions: { id: number }[];
}
