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
      serviceSalesPointId,
      scheduleId,
      scheduleStartDate,
      scheduleEndDate,
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
            salesPointId: serviceSalesPointId,
          },
        },
        schedule: {
          create: {
            id: scheduleId,
            startDate: scheduleStartDate,
            endDate: scheduleEndDate,
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
      serviceSalesPointId,
      scheduleId,
      scheduleStartDate,
      scheduleEndDate,
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
            salesPointId: serviceSalesPointId,
          },
        },
        schedule: {
          connect: {
            id: scheduleId,
            startDate: scheduleStartDate,
            endDate: scheduleEndDate,
          },
        },
      },
    });
  }

  remove(id: number) {
    return this.prisma.staffService.delete({ where: { id } });
  }
}
