import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Category } from './models/category.model';
import { categories } from '../../data/categories';
import { NewCategoryInput } from './dto/category.input';
import { UpdateCategoryInput } from './dto/category.update';
import { v4 as uuidv4 } from 'uuid';
import * as _ from 'lodash';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryEntity } from './category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(CategoryEntity)
    private categoryRepository: Repository<CategoryEntity>,
  ) {}

  // Find all categories
  async findAll(): Promise<Category[]> {
    return await this.categoryRepository.find();
  }

  // Find all categories by their IDs
  // @param ids Array of category IDs
  async findAllByIds(ids: string[]) {
    const foundCategories: Category[] = [];

    for (const id of ids) {
      const category = await this.findOneById(id);
      if (category) foundCategories.push(category);
    }
    return foundCategories;
  }

  // Find a category by its ID
  // @param id Category ID
  async findOneById(id: string): Promise<CategoryEntity> {
    const category = await this.categoryRepository.find({
      where: {
        id: id,
      },
    });

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    return category[0];
  }

  // Create a new category
  async create(createCategoryInput: NewCategoryInput): Promise<Category> {
    // In case the dto has an id, use it. Otherwise, generate a new one
    // This can be useful when we want to create a publication with a specific id (say the company uses a specific id schem)
    const uuid = createCategoryInput.id ? createCategoryInput.id : uuidv4();

    // Check if category already exists
    const existingCategory: Category = categories.find(
      (category) => category.id === uuid,
    );

    // If category already exists, throw an error
    if (existingCategory) {
      throw new BadRequestException('Category already exists');
    }

    // If category doesn't exist, create a new one
    const newCategory: Category = {
      id: uuid,
      ...createCategoryInput,
    };

    // Slugify the category slug
    newCategory.slug = _.kebabCase(newCategory.slug);

    // Add createdAt and updatedAt fields
    newCategory.createdAt = new Date().toISOString().slice(0, 24);
    newCategory.updatedAt = new Date().toISOString().slice(0, 24);

    return await this.categoryRepository.save(newCategory);
  }

  async removeOneById(id: string): Promise<CategoryEntity> {
    try {
      // Retrieve the category
      const removedCategory = await this.findOneById(id);

      await this.categoryRepository.remove(removedCategory);

      // Return success
      return removedCategory;
    } catch (error) {
      // If the category doesn't exist, throw an error
      throw new NotFoundException(error);
    }
  }

  async updateOneById(id: string, updateCategoryInput: UpdateCategoryInput) {
    const category: Category = await this.findOneById(id);

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    const newCategory = {
      ...category,
      ...updateCategoryInput,
      updatedAt: new Date().toISOString().slice(0, 24),
    };

    newCategory.slug = _.kebabCase(newCategory.slug);

    return await this.categoryRepository.save(newCategory);
  }
}
