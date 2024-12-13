import { Injectable } from "@nestjs/common";
import { CreateServiceDto } from "./dto/create-service.dto";
import { UpdateServiceDto } from "./dto/update-service.dto";
import { PrismaService } from "src/database/prisma.service";
import { CreateStaffserviceDto } from "src/staffservices/dto/create-staffservice.dto";
import { SalesPoint, Staff } from "@prisma/client";

@Injectable()
export class ServicesService {
  constructor(private prisma: PrismaService) {}

  async create(createServiceDto: CreateServiceDto) {
    const { promotions, salesPointsStaff, salespoints, ...data } = createServiceDto;
    const salesPoints = [];
    const staff: CreateStaffserviceDto[] = [];
    
    const service = await this.prisma.service.create({ data: {
      ...data,
      ...(promotions && promotions.length > 0 && { promotions: { connect: promotions } }),
    }});

    salesPointsStaff.forEach(s => {
      salesPoints.push({ id: s.salesPointId });
      s.salesPointStaff.forEach(salesPointStaff => {
        const salespoint: any = salespoints?.find(salespoint => salespoint.id === s.salesPointId);
        const staffRef: Staff = salespoint?.staff?.find(sstaff => sstaff.id === +salesPointStaff)
        staff.push({
          staffId: +salesPointStaff,
          staffEmail: staffRef.userEmail,
          staffName: staffRef.userName,
          serviceId: service.id,
          serviceName: service.name,
          salesPointId: s.salesPointId,
          salesPointName: salespoint.id,
        });
      });
    });

    return this.prisma.staffService.createMany( { data: staff });
  }

  findAll() {
    return this.prisma.service.findMany({
      include: { staff: true },
    });
  }

  findOne(id: number) {
    return this.prisma.service.findUnique({ where: { id } });
  }

  async update(id: number, updateServiceDto: UpdateServiceDto) {
    const { promotions, salesPointsStaff, salespoints, ...data } = updateServiceDto;
    
    const service = await this.prisma.service.update({
      where: { id },
      data: {
        ...data,
        ...(promotions && promotions.length > 0 && { promotions: { connect: promotions } }),
      }
    });

    const staffServicePromises = salesPointsStaff.flatMap(s => {
      return s.salesPointStaff.map(salesPointStaff => {
        const salespoint: any = salespoints?.find(salespoint => salespoint.id === s.salesPointId);
        const staffRef: Staff = salespoint?.staff?.find(sstaff => sstaff.id === +salesPointStaff)
        const newStaff = {
          staffId: +salesPointStaff,
          staffEmail: staffRef.userEmail,
          staffName: staffRef.userName,
          serviceId: service.id,
          serviceName: service.name,
          salesPointId: s.salesPointId,
          salesPointName: salespoint.name,
        };

        const { staffId, serviceId, salesPointId } = newStaff;
        return this.prisma.staffService.upsert({
          where: { group_id: { staffId, serviceId, salesPointId } },
          update: newStaff,
          create: newStaff
        });        
      });
    });
    return await Promise.all(staffServicePromises);
  }

  remove(id: number) {
    return this.prisma.service.delete({ where: { id } });
  }
}
