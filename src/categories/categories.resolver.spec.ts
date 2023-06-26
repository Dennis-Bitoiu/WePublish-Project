import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesResolver } from './categories.resolver';
import { describe, beforeEach, it} from 'node:test';

describe('CategoriesResolver', () => {
  let resolver: CategoriesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriesResolver],
    }).compile();

    resolver = module.get<CategoriesResolver>(CategoriesResolver);
  });

  // it('should be defined', () => {
  //   expect(resolver).toBeDefined();
  // });
});



