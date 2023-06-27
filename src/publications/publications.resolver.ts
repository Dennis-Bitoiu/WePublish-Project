import { Resolver } from '@nestjs/graphql';
import { Mutation, Query } from '@nestjs/graphql';
import { PublicationsService } from './publications.service';
import { Publication } from './models/publication.model';

@Resolver((of) => Publication)
export class PublicationsResolver {
  constructor(private readonly publicationsService: PublicationsService) {}

  @Query((returns) => [Publication], { name: 'publications' })
  getPublications(): Promise<Publication[]> {
    return this.publicationsService.findAll();
  }
}
