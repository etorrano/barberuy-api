import { Test, TestingModule } from '@nestjs/testing';
import { SalespointsController } from './salespoints.controller';
import { SalespointsService } from './salespoints.service';

describe('SalespointsController', () => {
  let controller: SalespointsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SalespointsController],
      providers: [SalespointsService],
    }).compile();

    controller = module.get<SalespointsController>(SalespointsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
