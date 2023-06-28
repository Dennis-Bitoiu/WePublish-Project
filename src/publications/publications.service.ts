import { Injectable, NotFoundException } from '@nestjs/common';
import { Publication } from './models/publication.model';
import { publications } from '../../data/publications';
import { NewPublicationInput } from './dto/publication.input';
import { UpdatePublicationInput } from './dto/publication.update';

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

  async removeOneById(id: string): Promise<Boolean> {
    const publication = await this.findOneById(id);

    if (!publication) {
      throw new Error('Publication not found');
    }

    const publicationId = publications.indexOf(publication);
    publications.splice(publicationId, 1);

    return true;
  }

  async updateOneById(
    id: string,
    updatePublicationInput: UpdatePublicationInput,
  ) {
    let publication: Publication = await this.findOneById(id);

    if (!publication) {
      throw new NotFoundException('Publication not found');
    }

    const publicationIndex = publications.indexOf(publication);
    publications[publicationIndex] = {
      ...publication,
      ...updatePublicationInput,
    };

    return publications[publicationIndex];
  }
}
