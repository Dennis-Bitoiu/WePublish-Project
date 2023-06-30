import { PublicationsService } from './publications.service';
import { Publication } from './models/publication.model';
import { PublicationEntity } from './publication.entity';
import { PublicationsArgs } from './dto/publications.args';
import { NewPublicationInput } from './dto/publication.input';
import { UpdatePublicationInput } from './dto/publication.update';
import { Category } from '../categories/models/category.model';
import { CategoriesService } from '../categories/categories.service';
export declare class PublicationsResolver {
    private readonly publicationsService;
    private readonly categoriesService;
    constructor(publicationsService: PublicationsService, categoriesService: CategoriesService);
    getPublications(): Promise<PublicationEntity[]>;
    getPublicationById(args: PublicationsArgs): Promise<PublicationEntity>;
    getPublicationCategories(args: PublicationsArgs): Promise<Category[]>;
    bulkImport(): Promise<PublicationEntity[]>;
    createPublication(publicationInput: NewPublicationInput): Promise<Publication>;
    removePublication(args: PublicationsArgs): Promise<PublicationEntity>;
    updatePublication(args: PublicationsArgs, updatePublicationInput: UpdatePublicationInput): Promise<Publication>;
}
