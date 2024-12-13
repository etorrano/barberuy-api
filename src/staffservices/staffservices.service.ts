import { Injectable } from "@nestjs/common";
import { CreateStaffserviceDto } from "./dto/create-staffservice.dto";
import { UpdateStaffserviceDto } from "./dto/update-staffservice.dto";
import { PrismaService } from "src/database/prisma.service";

@Injectable()
export class StaffservicesService {
  constructor(private prisma: PrismaService) {}

  create(createStaffserviceDto: CreateStaffserviceDto) {
    const {
      staffId,
      staffEmail,
      staffName,
      serviceId,
      serviceName,
      salesPointId,
      salesPointName,
      schedules,
      ...data
    } = createStaffserviceDto;
    return this.prisma.staffService.create({
      data: {
        ...data,
        staff: {
          connect: {
            id: staffId,
            userEmail: staffEmail,
            userName: staffName,
          },
        },
        service: {
          connect: {
            id: serviceId,
            name: serviceName,
          },
        },
        salesPoint: {
          connect: {
            id: salesPointId,
            name: salesPointName,
          },
        },
      },
    });
  }

  findAll() {
    return this.prisma.staffService.findMany();
  }

  findOne(id: number) {
    return this.prisma.staffService.findUnique({ where: { id } });
  }

  update(id: number, updateStaffserviceDto: UpdateStaffserviceDto) {
    const {
      staffId,
      staffEmail,
      staffName,
      serviceId,
      serviceName,
      salesPointId,
      salesPointName,
      schedules,
      ...data
    } = updateStaffserviceDto;
    return this.prisma.staffService.update({
      where: { id },
      data: {
        ...data,
        staff: {
          connect: {
            id: staffId,
            userEmail: staffEmail,
            userName: staffName,
          },
        },
        service: {
          connect: {
            id: serviceId,
            name: serviceName,
          },
        },
        schedules: {
          connect: schedules,
        },
        salesPoint: {
          connect: {
            id: salesPointId,
            name: salesPointName,
          },
        },
      },
    });
  }

  remove(id: number) {
    return this.prisma.staffService.delete({ where: { id } });
  }
}
