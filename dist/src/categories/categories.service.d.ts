import { Category } from './models/category.model';
import { NewCategoryInput } from './dto/category.input';
import { UpdateCategoryInput } from './dto/category.update';
import { Repository } from 'typeorm';
import { CategoryEntity } from './category.entity';
export declare class CategoriesService {
    private categoryRepository;
    constructor(categoryRepository: Repository<CategoryEntity>);
    findAll(): Promise<Category[]>;
    findAllByIds(ids: string[]): Promise<Category[]>;
    findOneById(id: string): Promise<CategoryEntity>;
    create(createCategoryInput: NewCategoryInput): Promise<Category>;
    removeOneById(id: string): Promise<CategoryEntity>;
    updateOneById(id: string, updateCategoryInput: UpdateCategoryInput): Promise<{
        updatedat: string;
        id: string;
        name: string;
        slug: string;
        iconUrl: string;
        activeFrom: string;
        activeUntil: string;
        iconurl: string;
        activefrom: string;
        activeuntil: string;
        createdat?: string;
    } & CategoryEntity>;
}
