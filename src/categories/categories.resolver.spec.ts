import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesResolver } from './categories.resolver';
import { CategoriesService } from './categories.service';
import { categories } from '../../data/categories';
import { Category } from './models/category.model';

describe('CategoriesResolver', () => {
  let resolver: CategoriesResolver;
  let service: CategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriesResolver, CategoriesService],
    }).compile();

    resolver = module.get<CategoriesResolver>(CategoriesResolver);
    service = module.get<CategoriesService>(CategoriesService);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('getCategories', () => {
    it('should return an array of categories', async () => {
      // Mock a call to the the findAll service method
      jest.spyOn(service, 'findAll').mockResolvedValue(categories);
      expect(service.findAll).not.toHaveBeenCalled();

      const result: Category[] = await resolver.getCategories();

      expect(result).toEqual(categories);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('getCategory', () => {
    it('should return a category', async () => {
      for (const category of categories) {
        const result: Category = await resolver.getCategory({
          id: category.id,
        }); // Pass as argument an object with the same shape as the CategoriesArgs type

        expect(result).toEqual(category);
      }
    });
  });

  describe('createCategory', () => {
    it('should create a new category', async () => {
      const category: Category = {
        id: '1f68fdaf-735e-4a78-b6ad-34d714ee4e6f',
        name: 'New Category',
        slug: 'new-category-slug',
        iconUrl:
          'https://assets.wepublish.com/folders-nl/categories/icons/3c62dedf-9fe0-4ce0-9396-84fd8f0da0ac_black-friday.svg',
        activeFrom: '11-15',
        activeUntil: '11-30',
      };
      jest.spyOn(service, 'create').mockResolvedValue(category);

      // const categoriesLength = categories.length;

      const result: Category = await resolver.createCategory({
        id: '1f68fdaf-735e-4a78-b6ad-34d714ee4e6f',
        name: 'New Category',
        slug: 'new-category-slug',
        iconUrl:
          'https://assets.wepublish.com/folders-nl/categories/icons/3c62dedf-9fe0-4ce0-9396-84fd8f0da0ac_black-friday.svg',
        activeFrom: '11-15',
        activeUntil: '11-30',
      });

      expect(service.create).toHaveBeenCalled();
      expect(result).toEqual(category);

      // This can't really be tested the data is retrieved from a static file
      // expect(categories.length).toEqual(categoriesLength + 1);
    });
  });
});
