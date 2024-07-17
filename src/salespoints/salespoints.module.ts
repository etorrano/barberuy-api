import { Module } from "@nestjs/common";
import { SalespointsService } from "./salespoints.service";
import { SalespointsController } from "./salespoints.controller";
import { PrismaModule } from "src/database/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [SalespointsController],
  providers: [SalespointsService],
})
export class SalespointsModule {}
