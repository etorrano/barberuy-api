import { ApiProperty } from "@nestjs/swagger";
import { ReviewType } from "@prisma/client";

export class CreateReviewDto {
  @ApiProperty()
  score: number;

  @ApiProperty()
  comment: string;

  @ApiProperty()
  type: ReviewType;

  @ApiProperty()
  scheduleId: number;
}
