import { Test, TestingModule } from '@nestjs/testing';
import { PublicationsService } from './publications.service';
import { describe, beforeEach } from 'node:test';

describe('PublicationsService', () => {
  let service: PublicationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PublicationsService],
    }).compile();

    service = module.get<PublicationsService>(PublicationsService);
  });

  // it('should be defined', () => {
  //   expect(service).toBeDefined();
  // });
});
