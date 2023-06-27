import { Injectable } from '@nestjs/common';
import { Category } from './models/category.model';
import { categories } from '../../data/categories';
import { NewCategoryInput } from './dto/category.input';

@Injectable()
export class CategoriesService {
  async findAll(): Promise<Category[]> {
    return categories;
  }

  async findOneById(id: string): Promise<Category> {
    return categories.find((category) => category.id === id);
  }

  async create(createCategoryInput: NewCategoryInput): Promise<Category> {
    const newCategory: Category = {
      ...createCategoryInput,
    };

    categories.push(newCategory);
    console.log(categories);
    return newCategory;
  }
}
