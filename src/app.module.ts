import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { HealthcheckServiceModule } from './healthcheck-service/healthcheck-service.module';
import { WorkshiftsModule } from './workshifts/workshifts.module';
import { CompaniesModule } from './companies/companies.module';
import { BusinessModule } from './business/business.module';
import { SalespointsModule } from './salespoints/salespoints.module';
import { ServicesModule } from './services/services.module';
import { StaffservicesModule } from './staffservices/staffservices.module';

@Module({
  imports: [AuthModule, HealthcheckServiceModule, WorkshiftsModule, CompaniesModule, BusinessModule, SalespointsModule, ServicesModule, StaffservicesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
