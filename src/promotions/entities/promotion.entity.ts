import { ApiProperty } from "@nestjs/swagger";
import { Promotion, PromotionType, Service } from "@prisma/client";

export class PromotionEntity implements Promotion {
  @ApiProperty()
  id: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

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
  services: Service[];
}
