import { Module } from "@nestjs/common";
import { StaffservicesService } from "./staffservices.service";
import { StaffservicesController } from "./staffservices.controller";
import { PrismaModule } from "src/database/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [StaffservicesController],
  providers: [StaffservicesService],
})
export class StaffservicesModule {}
