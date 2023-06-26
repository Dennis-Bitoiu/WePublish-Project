import {Query} from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { CategoriesService } from './categories.service';
import { Category } from './models/category.model';

@Resolver(of => Category)
export class CategoriesResolver {
    constructor(private readonly categoriesService: CategoriesService) {}

    // Retrieves all categories
    // Second argument sets the query type name to 'categories'
    @Query(returns => [Category], {name: 'categories'})
    getCategories(): Promise<Category[]> {
        return this.categoriesService.findAll();
    }
}
