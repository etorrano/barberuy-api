import { PrismaService } from "./../auth/prisma.service";
import { Module } from "@nestjs/common";
import { WorkshiftsService } from "./workshifts.service";
import { WorkshiftsController } from "./workshifts.controller";

@Module({
  controllers: [WorkshiftsController],
  providers: [WorkshiftsService, PrismaService],
})
export class WorkshiftsModule {}
