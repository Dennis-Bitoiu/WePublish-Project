import { Test, TestingModule } from '@nestjs/testing';
import { PublicationsResolver } from './publications.resolver';
import { publications } from '../../data/publications';
import { PublicationsService } from './publications.service';
import { CategoriesService } from '../categories/categories.service';

describe('PublicationsResolver', () => {
  let resolver: PublicationsResolver;
  let service: PublicationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PublicationsResolver, PublicationsService, CategoriesService],
    }).compile();

    resolver = module.get<PublicationsResolver>(PublicationsResolver);
    service = module.get<PublicationsService>(PublicationsService);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('getPublications', () => {
    it('should return an array of publications', async () => {
      jest.spyOn(service, 'findAll').mockResolvedValue(publications);
      expect(service.findAll).not.toHaveBeenCalled();

      const result = await resolver.getPublications();

      expect(result).toEqual(publications);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('getPublicationById', () => {
    it('should return a publication by ID', async () => {
      for (const publication of publications) {
        const result = await resolver.getPublicationById({
          id: publication.id, // Pass as argument an object with the same shape as the PublicationArgs type
        });

        expect(result.id).toEqual(publication.id);
        expect(result.slug).toEqual(publication.slug);
      }
    });
  });
});
