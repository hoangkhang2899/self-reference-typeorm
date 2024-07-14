import { Test, TestingModule } from '@nestjs/testing';
import { SelfService } from './self.service';

describe('SelfService', () => {
  let service: SelfService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SelfService],
    }).compile();

    service = module.get<SelfService>(SelfService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
