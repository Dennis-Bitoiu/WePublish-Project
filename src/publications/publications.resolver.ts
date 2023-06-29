import { Args, Parent, Resolver } from '@nestjs/graphql';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { Mutation, Query } from '@nestjs/graphql';
import { PublicationsService } from './publications.service';
import { Publication } from './models/publication.model';
import { PublicationsArgs } from './dto/publications.args';
import { NewPublicationInput } from './dto/publication.input';
import { UpdatePublicationInput } from './dto/publication.update';
import { Category } from '../categories/models/category.model';
import { CategoriesService } from '../categories/categories.service';

@Resolver((of) => Publication)
export class PublicationsResolver {
  constructor(
    private readonly publicationsService: PublicationsService,
    private readonly categoriesService: CategoriesService,
  ) {}

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
      throw new NotFoundException(id);
    }

    // Retrieve all categories for the publication
    const publicationCategories: Category[] =
      await this.categoriesService.findAllByIds(publication.categories);

    return publicationCategories;
  }

  @Mutation((returns) => Publication)
  async createPublication(
    @Args('publicationInput') publicationInput: NewPublicationInput,
  ): Promise<Publication> {
    const existingPublication: Publication =
      (await this.publicationsService.findOneBySlug(publicationInput.slug)) ||
      (await this.publicationsService.findOneById(publicationInput.id));

    // If a publication with the same slug or ID already exists, throw an error
    // A publication can only be created if the slug and ID are unique
    if (existingPublication) {
      throw new BadRequestException(`Publication already exists`);
    }

    // Check if each category ID in the publicationInput exists
    const categories = await this.categoriesService.findAllByIds(
      publicationInput.categories,
    );

    // If the number of categories returned does not match the number of categories in the publicationInput, throw an error
    if (categories.length !== publicationInput.categories.length) {
      throw new Error('One or more categories do not exist');
    }

    const publication = await this.publicationsService.create(publicationInput);

    return publication;
  }

  @Mutation(() => Boolean)
  async removePublication(@Args() args: PublicationsArgs): Promise<Boolean> {
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
