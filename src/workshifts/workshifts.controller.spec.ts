import { Test, TestingModule } from '@nestjs/testing';
import { WorkshiftsController } from './workshifts.controller';
import { WorkshiftsService } from './workshifts.service';

describe('WorkshiftsController', () => {
  let controller: WorkshiftsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkshiftsController],
      providers: [WorkshiftsService],
    }).compile();

    controller = module.get<WorkshiftsController>(WorkshiftsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
