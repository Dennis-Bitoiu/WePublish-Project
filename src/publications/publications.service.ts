import { Injectable } from '@nestjs/common';
import { Publication } from './models/publication.model';
import { publications } from '../../data/publications';

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
}
