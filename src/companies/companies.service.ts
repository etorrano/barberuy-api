import { Injectable } from "@nestjs/common";
import { CreateCompanyDto } from "./dto/create-company.dto";
import { UpdateCompanyDto } from "./dto/update-company.dto";
import { PrismaService } from "src/database/prisma.service";

@Injectable()
export class CompaniesService {
  constructor(private prisma: PrismaService) {}

  create(createCompanyDto: CreateCompanyDto) {
    const { business, ...data } = createCompanyDto;
    return this.prisma.company.create({
      data: { ...data, business: { connect: business } },
    });
  }

  findAll() {
    return this.prisma.company.findMany();
  }

  findOne(id: number) {
    return this.prisma.company.findUnique({ where: { id } });
  }

  update(id: number, updateCompanyDto: UpdateCompanyDto) {
    const { business, ...data } = updateCompanyDto;
    return this.prisma.company.update({
      where: { id },
      data: { ...data, business: { connect: business } },
    });
  }

  remove(id: number) {
    return this.prisma.company.delete({ where: { id } });
  }
}
