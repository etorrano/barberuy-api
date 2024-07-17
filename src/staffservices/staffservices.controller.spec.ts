import { Test, TestingModule } from '@nestjs/testing';
import { StaffservicesController } from './staffservices.controller';
import { StaffservicesService } from './staffservices.service';

describe('StaffservicesController', () => {
  let controller: StaffservicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StaffservicesController],
      providers: [StaffservicesService],
    }).compile();

    controller = module.get<StaffservicesController>(StaffservicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
