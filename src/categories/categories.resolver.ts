import { Mutation, Query } from '@nestjs/graphql';
import { NotFoundException } from '@nestjs/common';
import { Args, Resolver } from '@nestjs/graphql';
import { CategoriesService } from './categories.service';
import { CategoriesArgs } from './dto/categories.args';
import { NewCategoryInput } from './dto/category.input';
import { UpdateCategoryInput } from './dto/category.update';
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
    // Destructure ID from args
    const { id } = args;

    // Await for the promise to resolve
    const category = await this.categoriesService.findOneById(id);

    // If no category is found, throw an error
    if (!category) {
      throw new NotFoundException(id);
    }

    // Otherwise return the category
    return category;
  }

  @Mutation((returns) => Category)
  async createCategory(
    @Args('newCategoryData') newCategoryData: NewCategoryInput,
  ): Promise<Category> {
    const category = await this.categoriesService.create(newCategoryData);

    return category;
  }

  @Mutation(() => Boolean)
  async removeCategory(@Args() args: CategoriesArgs): Promise<Boolean> {
    const { id } = args;
    return this.categoriesService.removeOneById(id);
  }

  @Mutation(() => Category)
  async updateCategory(
    @Args() args: CategoriesArgs,
    @Args('updateCategoryInput') updateCategoryInput: UpdateCategoryInput,
  ): Promise<Category> {
    try {
      const { id } = args;
      const updatedCategory = await this.categoriesService.updateOneById(
        id,
        updateCategoryInput,
      );

      return updatedCategory;
    } catch (error) {
      throw new NotFoundException(error);
    }
  }
}
