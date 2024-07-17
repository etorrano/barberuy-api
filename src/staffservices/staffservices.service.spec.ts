import { Test, TestingModule } from '@nestjs/testing';
import { StaffservicesService } from './staffservices.service';

describe('StaffservicesService', () => {
  let service: StaffservicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StaffservicesService],
    }).compile();

    service = module.get<StaffservicesService>(StaffservicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
