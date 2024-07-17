import { PrismaModule } from "./../database/prisma.module";
import { Module } from "@nestjs/common";
import { CompaniesService } from "./companies.service";
import { CompaniesController } from "./companies.controller";

@Module({
  imports: [PrismaModule],
  controllers: [CompaniesController],
  providers: [CompaniesService],
})
export class CompaniesModule {}
