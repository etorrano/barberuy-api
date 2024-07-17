import { Injectable } from "@nestjs/common";
import { CreateReviewDto } from "./dto/create-review.dto";
import { UpdateReviewDto } from "./dto/update-review.dto";
import { PrismaService } from "src/database/prisma.service";

@Injectable()
export class ReviewsService {
  constructor(private prisma: PrismaService) {}

  create(createReviewDto: CreateReviewDto) {
    const { scheduleId, ...data } = createReviewDto;
    return this.prisma.review.create({
      data: {
        ...data,
        schedule: {
          connect: {
            id: scheduleId,
          },
        },
      },
    });
  }

  findAll() {
    return this.prisma.review.findMany();
  }

  findOne(id: number) {
    return this.prisma.review.findUnique({ where: { id } });
  }

  update(id: number, updateReviewDto: UpdateReviewDto) {
    const { scheduleId, ...data } = updateReviewDto;
    return this.prisma.review.update({
      where: { id },
      data: {
        ...data,
        schedule: {
          connect: {
            id: scheduleId,
          },
        },
      },
    });
  }

  remove(id: number) {
    return this.prisma.review.delete({ where: { id } });
  }
}
