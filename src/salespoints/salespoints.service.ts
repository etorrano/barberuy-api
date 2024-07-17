import { Injectable } from "@nestjs/common";
import { CreateSalespointDto } from "./dto/create-salespoint.dto";
import { UpdateSalespointDto } from "./dto/update-salespoint.dto";
import { PrismaService } from "src/database/prisma.service";

@Injectable()
export class SalespointsService {
  constructor(private prisma: PrismaService) {}

  create(createSalespointDto: CreateSalespointDto) {
    return this.prisma.salesPoint.create({ data: createSalespointDto });
  }

  findAll() {
    return this.prisma.salesPoint.findMany();
  }

  findOne(id: number) {
    return this.prisma.salesPoint.findUnique({ where: { id } });
  }

  update(id: number, updateSalespointDto: UpdateSalespointDto) {
    return this.prisma.salesPoint.update({
      where: { id },
      data: updateSalespointDto,
    });
  }

  remove(id: number) {
    return this.prisma.salesPoint.delete({ where: { id } });
  }
}
