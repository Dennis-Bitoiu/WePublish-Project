import { Publication } from './models/publication.model';
import { NewPublicationInput } from './dto/publication.input';
import { UpdatePublicationInput } from './dto/publication.update';
import { Repository } from 'typeorm';
import { PublicationEntity } from './publication.entity';
export declare class PublicationsService {
    private publicationRepository;
    constructor(publicationRepository: Repository<PublicationEntity>);
    findAll(): Promise<PublicationEntity[]>;
    createMultiple(publications: PublicationEntity[]): Promise<PublicationEntity[]>;
    findOneById(id: string): Promise<Publication>;
    findOneBySlug(slug: String): Promise<Publication>;
    create(publicationInput: NewPublicationInput): Promise<PublicationEntity>;
    removeOneById(id: string): Promise<PublicationEntity>;
    updateOneById(id: string, updatePublicationInput: UpdatePublicationInput): Promise<Publication & PublicationEntity>;
}
