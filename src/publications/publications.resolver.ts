import { Args, Parent, Resolver } from '@nestjs/graphql';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { Mutation, Query } from '@nestjs/graphql';
import { PublicationsService } from './publications.service';
import { Publication } from './models/publication.model';
import { PublicationEntity } from './publication.entity';
import { PublicationsArgs } from './dto/publications.args';
import { NewPublicationInput } from './dto/publication.input';
import { UpdatePublicationInput } from './dto/publication.update';
import { Category } from '../categories/models/category.model';
import { CategoriesService } from '../categories/categories.service';
import { publications } from '../../data/publications';
import { query } from 'express';

@Resolver((of) => PublicationEntity)
export class PublicationsResolver {
  constructor(
    private readonly publicationsService: PublicationsService,
    private readonly categoriesService: CategoriesService,
  ) {}

  @Query(() => [PublicationEntity], { name: 'publications' })
  async getPublications(): Promise<PublicationEntity[]> {
    return this.publicationsService.findAll();
  }

  @Query(() => PublicationEntity, { name: 'publication' })
  async getPublicationById(
    @Args() args: PublicationsArgs,
  ): Promise<PublicationEntity> {
    const { id } = args;

    const publication = await this.publicationsService.findOneById(id);
    if (!publication) {
      throw new NotFoundException(id);
    }

    return publication;
  }

  // Retrieves all categories for a publication
  @Query(() => [Category], { name: 'publicationCategories' })
  async getPublicationCategories(
    @Args() args: PublicationsArgs,
  ): Promise<Category[]> {
    // Destructure ID from args
    const { id } = args;

    // Retrieve publication by ID
    const publication = await this.publicationsService.findOneById(id);

    // If no publication is found, throw an error
    if (!publication) {
      throw new NotFoundException('Publication not found');
    }

    // Retrieve all categories for the publication
    const publicationCategories: Category[] =
      await this.categoriesService.findAllByIds(publication.categories);

    return publicationCategories;
  }

  @Mutation(() => PublicationEntity)
  async createPublication(
    @Args('publicationInput') publicationInput: NewPublicationInput,
  ): Promise<Publication> {
    const publication = await this.publicationsService.create(publicationInput);

    return publication;
  }

  @Mutation(() => PublicationEntity)
  async removePublication(
    @Args() args: PublicationsArgs,
  ): Promise<PublicationEntity> {
    const { id } = args;

    return await this.publicationsService.removeOneById(id);
  }

  @Mutation(() => Publication)
  async updatePublication(
    @Args() args: PublicationsArgs,
    @Args('updatePublicationInput')
    updatePublicationInput: UpdatePublicationInput,
  ): Promise<Publication> {
    try {
      const { id } = args;

      const updatedPublication = await this.publicationsService.updateOneById(
        id,
        updatePublicationInput,
      );

      return updatedPublication;
    } catch (error) {
      throw new NotFoundException(error);
    }
  }
}
