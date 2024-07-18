import { ApiProperty } from "@nestjs/swagger";
import { PromotionType } from "@prisma/client";

export class CreatePromotionDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  type: PromotionType;

  @ApiProperty()
  value: number;

  @ApiProperty()
  startDate: Date;

  @ApiProperty()
  endDate: Date;

  @ApiProperty()
  enabled: boolean;

  @ApiProperty()
  services: { id: number }[];
}
