import { PrismaService } from "./../database/prisma.service";
import { Injectable } from "@nestjs/common";
import { CreateSalespointDto } from "./dto/create-salespoint.dto";
import { UpdateSalespointDto } from "./dto/update-salespoint.dto";

@Injectable()
export class SalespointsService {
  constructor(private prisma: PrismaService) {}

  create(createSalespointDto: CreateSalespointDto) {
    return this.prisma.salesPoint.create({
      data: {
        ...createSalespointDto,
        admins: {
          connect: createSalespointDto.admins.map((a) => ({ id: a.id })),
        },
        staff: {
          connect: createSalespointDto.admins.map((a) => ({ id: a.id })),
        },
        staffServices: {
          connect: createSalespointDto.admins.map((a) => ({ id: a.id })),
        },
      },
    });
  }

  findAll() {
    return this.prisma.salesPoint.findMany({
      include: { staff: true, staffServices: true, admins: true },
    });
  }

  findOne(id: number) {
    return this.prisma.salesPoint.findUnique({
      where: { id },
      include: {
        staff: true,
      },
    });
  }

  update(id: number, updateSalespointDto: UpdateSalespointDto) {
    return this.prisma.salesPoint.update({
      where: { id },
      data: {
        ...updateSalespointDto,
        admins: {
          connect: updateSalespointDto.admins,
        },
        staff: {
          connect: updateSalespointDto.staff,
        },
        staffServices: {
          connect: updateSalespointDto.staffServices,
        },
      },
    });
  }

  remove(id: number) {
    return this.prisma.salesPoint.delete({ where: { id } });
  }
}
