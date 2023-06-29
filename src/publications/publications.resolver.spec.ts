import { Test, TestingModule } from '@nestjs/testing';
import { PublicationsResolver } from './publications.resolver';
import { publications } from '../../data/publications';
import { PublicationsService } from './publications.service';
import { CategoriesService } from '../categories/categories.service';
import { Publication } from './models/publication.model';

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

      const result = await resolver.getPublications();

      expect(result).toEqual(publications);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('removePublication', () => {
    it('should return true if the publcation was removed successfully', async () => {
      const success: Boolean = await resolver.removePublication({
        id: publications[0].id,
      });

      expect(success).toEqual(true);
    });
  });

  describe('getPublicationCategories', () => {
    it('should return an array of categories', async () => {
      const publication: Publication = await resolver.getPublicationById({
        id: 'b27afed5-e159-44e6-a3f9-e61671f8b173',
      });
      const categories = await resolver.getPublicationCategories({
        id: 'b27afed5-e159-44e6-a3f9-e61671f8b173',
      });

      for (let i = 0; i < categories.length; i++) {
        expect(categories[i].id).toEqual(publication.categories[i]);
      }
    });
  });
});
