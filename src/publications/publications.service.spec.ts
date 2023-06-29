import { Test, TestingModule } from '@nestjs/testing';
import { PublicationsService } from './publications.service';
import { publications } from '../../data/publications';

describe('PublicationsService', () => {
  let service: PublicationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PublicationsService],
    }).compile();

    service = module.get<PublicationsService>(PublicationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getPublications', () => {
    it('should return all publications', async () => {
      const foundPublications = await service.findAll();
      expect(foundPublications).toEqual(publications);
    });
  });
});
