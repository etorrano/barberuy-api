import { Test, TestingModule } from '@nestjs/testing';
import { SalespointsService } from './salespoints.service';

describe('SalespointsService', () => {
  let service: SalespointsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SalespointsService],
    }).compile();

    service = module.get<SalespointsService>(SalespointsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
