import { Injectable } from '@nestjs/common';
import { Publication } from './models/publication.model';
import { publications } from '../../data/publications';
import { NewPublicationInput } from './dto/publication.input';

@Injectable()
export class PublicationsService {
  async findAll(): Promise<Publication[]> {
    return publications;
  }

  async findOneById(id: string): Promise<Publication> {
    const publication = publications.find(
      (publication) => publication.id === id,
    );

    return publication;
  }

  async findOneBySlug(slug: String): Promise<Publication> {
    const publication = publications.find((pub) => pub.slug === slug);

    return publication;
  }

  async create(publicationInput: NewPublicationInput) {
    const publication: Publication = {
      ...publicationInput,
    };

    publications.push(publication);
    return publication;
  }
}
