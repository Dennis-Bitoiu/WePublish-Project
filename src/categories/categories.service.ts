import { Injectable } from '@nestjs/common';
import { Category } from './models/category.model';
import { categories } from '../../data/categories';
import { NewCategoryInput } from './dto/category.input';

@Injectable()
export class CategoriesService {
  // Find all categories
  async findAll(): Promise<Category[]> {
    return categories;
  }

  // Find all categories by their IDs
  // @param ids Array of category IDs
  async findAllByIds(ids: string[]) {
    const categories: Category[] = [];

    for (const id of ids) {
      const category = await this.findOneById(id);
      if (category) categories.push(category);
    }
    return categories;
  }

  // Find a category by its ID
  // @param id Category ID
  async findOneById(id: string): Promise<Category> {
    return categories.find((category) => category.id === id);
  }

  // Create a new category
  async create(createCategoryInput: NewCategoryInput): Promise<Category> {
    const existingCategory = await this.findOneById(createCategoryInput.id);

    // If category already exists, throw an error
    if (existingCategory) {
      throw new Error('Category already exists');
    }

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

  async removeOneById(id: string): Promise<Boolean> {
    // Retrieve the category
    const category = await this.findOneById(id);

    // If the category doesn't exist, throw an error
    if (!category) {
      throw new Error("Category doesn't exist");
    }

    // Store the index of the category
    const categoryIndex = categories.indexOf(category);

    // Remove the category based on its index
    categories.splice(categoryIndex, 1);

    // Return success
    return true;
  }
}
