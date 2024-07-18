import { Module } from "@nestjs/common";
import { PromotionsService } from "./promotions.service";
import { PromotionsController } from "./promotions.controller";
import { PrismaModule } from "src/database/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [PromotionsController],
  providers: [PromotionsService],
})
export class PromotionsModule {}
