import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesService } from './categories.service';
import { categories } from '../../data/categories';

describe('CategoriesService', () => {
  let service: CategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriesService],
    }).compile();

    service = module.get<CategoriesService>(CategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getCategories', () => {
    it('should return all categories', async () => {
      const foundCategories = await service.findAll();
      expect(foundCategories).toEqual(categories);
    });
  });
});
