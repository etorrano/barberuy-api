import { PrismaService } from "../database/prisma.service";
import { Injectable } from "@nestjs/common";
import { CreateWorkshiftDto } from "./dto/create-workshift.dto";
import { UpdateWorkshiftDto } from "./dto/update-workshift.dto";

@Injectable()
export class WorkshiftsService {
  constructor(private prisma: PrismaService) {}

  create(createWorkshiftDto: CreateWorkshiftDto) {
    return this.prisma.workShift.create({ data: createWorkshiftDto });
  }

  findAll() {
    return this.prisma.workShift.findMany();
  }

  findOne(id: number) {
    return this.prisma.workShift.findUnique({ where: { id } });
  }

  update(id: number, updateWorkshiftDto: UpdateWorkshiftDto) {
    return this.prisma.workShift.update({
      where: { id },
      data: updateWorkshiftDto,
    });
  }

  remove(id: number) {
    return this.prisma.workShift.delete({ where: { id } });
  }
}
