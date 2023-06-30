import { CategoriesService } from './categories.service';
import { CategoriesArgs } from './dto/categories.args';
import { NewCategoryInput } from './dto/category.input';
import { UpdateCategoryInput } from './dto/category.update';
import { Category } from './models/category.model';
import { CategoryEntity } from './category.entity';
export declare class CategoriesResolver {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    getCategories(): Promise<Category[]>;
    getCategory(args: CategoriesArgs): Promise<CategoryEntity>;
    createCategory(newCategoryData: NewCategoryInput): Promise<Category>;
    removeCategory(args: CategoriesArgs): Promise<CategoryEntity>;
    updateCategory(args: CategoriesArgs, updateCategoryInput: UpdateCategoryInput): Promise<Category>;
}
