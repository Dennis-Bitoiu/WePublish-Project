import { Args, Resolver } from '@nestjs/graphql';
import { NotFoundException } from '@nestjs/common';
import { Mutation, Query } from '@nestjs/graphql';
import { PublicationsService } from './publications.service';
import { Publication } from './models/publication.model';
import { PublicationsArgs } from './dto/publications.args';

@Resolver((of) => Publication)
export class PublicationsResolver {
  constructor(private readonly publicationsService: PublicationsService) {}

  @Query((returns) => [Publication], { name: 'publications' })
  async getPublications(): Promise<Publication[]> {
    return this.publicationsService.findAll();
  }

  @Query((returns) => Publication, { name: 'publication' })
  async getPublicationById(
    @Args() args: PublicationsArgs,
  ): Promise<Publication> {
    const { id } = args;

    const publication = await this.publicationsService.findOneById(id);

    if (!publication) {
      throw new NotFoundException(id);
    }

    return publication;
  }
}
