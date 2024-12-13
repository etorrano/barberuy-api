import { PrismaService } from "./../database/prisma.service";
import { Injectable } from "@nestjs/common";
import { CreateSalespointDto } from "./dto/create-salespoint.dto";
import { UpdateSalespointDto } from "./dto/update-salespoint.dto";

@Injectable()
export class SalespointsService {
  constructor(private prisma: PrismaService) {}

  create(createSalespointDto: CreateSalespointDto) {
    return this.prisma.salesPoint.create({
      include: { staff: true, workshifts: true },
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
        workshifts: {
          connect: createSalespointDto.workshifts.map((a) => ({ id: a.id })),
        },
      },
    });
  }

  findAll() {
    return this.prisma.salesPoint.findMany({
      include: {
        staff: true,
        staffServices: true,
        admins: true,
        workshifts: true,
      },
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
    console.log(updateSalespointDto);
    return this.prisma.salesPoint.update({
      where: { id },
      include: { staff: true, workshifts: true },
      data: {
        ...updateSalespointDto,
        admins: {
          set: updateSalespointDto.admins?.length
            ? updateSalespointDto.admins
            : [],
        },
        staff: {
          set: updateSalespointDto.staff?.length
            ? updateSalespointDto.staff
            : [],
        },
        staffServices: {
          set: updateSalespointDto.staffServices?.length
            ? updateSalespointDto.staffServices
            : undefined,
        },
        workshifts: {
          set: updateSalespointDto.workshifts?.length
            ? updateSalespointDto.workshifts
            : [],
        },
      },
    });
  }

  remove(id: number) {
    return this.prisma.salesPoint.delete({ where: { id } });
  }
}
