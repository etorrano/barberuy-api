import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { HealthcheckServiceModule } from './healthcheck-service/healthcheck-service.module';
import { WorkshiftsModule } from './workshifts/workshifts.module';

@Module({
  imports: [AuthModule, HealthcheckServiceModule, WorkshiftsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
