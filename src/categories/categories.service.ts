import { Injectable } from '@nestjs/common';
import { Category } from './models/category.model';
import {categories} from '../../data/categories'


@Injectable()
export class CategoriesService {
    async findAll(): Promise<Category[]> {

        return categories
    }

    async findOneById(id: string): Promise<Category> {
        return categories.find(category => category.id === id)
    }
}
