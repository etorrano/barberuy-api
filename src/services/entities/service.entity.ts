import { ApiProperty } from "@nestjs/swagger";
import { Promotion, Service, StaffService } from "@prisma/client";

export class ServiceEntity implements Service {
  @ApiProperty()
  id: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  key: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  cost: number;

  @ApiProperty()
  duration: number; //minutes

  @ApiProperty()
  salesPointId: number;

  @ApiProperty()
  staff: StaffService[];

  @ApiProperty()
  promotions: Promotion[];
}
