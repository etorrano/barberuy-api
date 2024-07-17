import { ApiProperty } from "@nestjs/swagger";
import { Review, ReviewType } from "@prisma/client";

export class ReviewEntity implements Review {
  @ApiProperty()
  id: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  score: number;

  @ApiProperty()
  comment: string;

  @ApiProperty()
  type: ReviewType;

  @ApiProperty()
  scheduleId: number;
}
