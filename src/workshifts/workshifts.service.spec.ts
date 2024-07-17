import { Test, TestingModule } from '@nestjs/testing';
import { WorkshiftsService } from './workshifts.service';

describe('WorkshiftsService', () => {
  let service: WorkshiftsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkshiftsService],
    }).compile();

    service = module.get<WorkshiftsService>(WorkshiftsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
