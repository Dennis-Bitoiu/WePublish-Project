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

    const currentDate = new Date();

    // Add createdAt and updatedAt fields
    newCategory.createdAt = currentDate.toISOString().slice(0, 24);
    newCategory.updatedAt = currentDate.toISOString().slice(0, 24);

    categories.push(newCategory);

    return newCategory;
  }
}
