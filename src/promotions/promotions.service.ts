import { Injectable } from "@nestjs/common";
import { CreatePromotionDto } from "./dto/create-promotion.dto";
import { UpdatePromotionDto } from "./dto/update-promotion.dto";
import { PrismaService } from "src/database/prisma.service";

@Injectable()
export class PromotionsService {
  constructor(private prisma: PrismaService) {}

  create(createPromotionDto: CreatePromotionDto) {
    const { services, ...data } = createPromotionDto;
    return this.prisma.promotion.create({
      data: {
        ...data,
        services: {
          connect: services,
        },
      },
    });
  }

  findAll() {
    return this.prisma.promotion.findMany();
  }

  findOne(id: number) {
    return this.prisma.promotion.findUnique({ where: { id } });
  }

  update(id: number, updatePromotionDto: UpdatePromotionDto) {
    const { services, ...data } = updatePromotionDto;
    return this.prisma.promotion.update({
      where: { id },
      data: {
        ...data,
        services: {
          connect: services,
        },
      },
    });
  }

  remove(id: number) {
    return this.prisma.promotion.delete({ where: { id } });
  }
}
