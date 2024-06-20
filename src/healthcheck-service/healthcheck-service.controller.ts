import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthcheckServiceController {
    @Get()
    public getHealthcheck(): string {
        return 'OK';
    }
}
