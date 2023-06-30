import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Publication } from './models/publication.model';
import { publications } from '../../data/publications';
import { NewPublicationInput } from './dto/publication.input';
import { UpdatePublicationInput } from './dto/publication.update';
import { v4 as uuidv4 } from 'uuid';
import * as _ from 'lodash';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PublicationEntity } from './publication.entity';

@Injectable()
export class PublicationsService {
  constructor(
    @InjectRepository(PublicationEntity)
    private publicationRepository: Repository<PublicationEntity>,
  ) {}

  async findAll(): Promise<PublicationEntity[]> {
    const publications = await this.publicationRepository.find();

    return publications;
  }

  async findOneById(id: string): Promise<Publication> {
    const publication = await this.publicationRepository.find({
      where: {
        id: id,
      },
    });

    return publication[0];
  }

  async findOneBySlug(slug: String): Promise<Publication> {
    const publication = publications.find((pub) => pub.slug === slug);

    return publication;
  }

  async create(publicationInput: NewPublicationInput) {
    const newPublication = this.publicationRepository.create(publicationInput);

    return await this.publicationRepository.save(newPublication);
  }

  async removeOneById(id: string): Promise<PublicationEntity> {
    const publication = await this.findOneById(id);

    if (!publication) {
      throw new Error('Publication not found');
    }

    const removedPublication = await this.publicationRepository.remove(
      publication,
    );

    return removedPublication;
  }

  async updateOneById(
    id: string,
    updatePublicationInput: UpdatePublicationInput,
  ) {
    // Retrieve the publication
    let publication: Publication = await this.findOneById(id);

    // If the publication doesn't exist, throw an error
    if (!publication) {
      throw new NotFoundException('Publication not found');
    }

    // If the publication exists, update it
    const updatedPublication: Publication = {
      ...publication,
      ...updatePublicationInput,
    };

    return this.publicationRepository.save(updatedPublication);
  }
}
