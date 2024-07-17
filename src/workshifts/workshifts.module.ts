import { PrismaModule } from "./../database/prisma.module";
import { Module } from "@nestjs/common";
import { WorkshiftsService } from "./workshifts.service";
import { WorkshiftsController } from "./workshifts.controller";

@Module({
  imports: [PrismaModule],
  controllers: [WorkshiftsController],
  providers: [WorkshiftsService],
})
export class WorkshiftsModule {}
