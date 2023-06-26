import { Query } from '@nestjs/graphql';
import { NotFoundException } from '@nestjs/common';
import { Args, Resolver } from '@nestjs/graphql';
import { CategoriesService } from './categories.service';
import { CategoriesArgs } from './dto/categories.args';
import { Category } from './models/category.model';

@Resolver((of) => Category)
export class CategoriesResolver {
  constructor(private readonly categoriesService: CategoriesService) {}

  // Retrieves all categories
  // Second argument sets the query type name to 'categories'
  @Query((returns) => [Category], { name: 'categories' })
  getCategories(): Promise<Category[]> {
    console.log('here');
    return this.categoriesService.findAll();
  }

  @Query((returns) => Category, { name: 'category' })
  async getCategory(@Args() args: CategoriesArgs): Promise<Category> {
    const { id } = args;
    const category = await this.categoriesService.findOneById(id);

    if (!category) {
      throw new NotFoundException(id);
    }

    return category;
  }
}
