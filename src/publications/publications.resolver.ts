import { Args, Parent, Resolver } from '@nestjs/graphql';
import { NotFoundException } from '@nestjs/common';
import { Mutation, Query } from '@nestjs/graphql';
import { PublicationsService } from './publications.service';
import { Publication } from './models/publication.model';
import { PublicationsArgs } from './dto/publications.args';
import { NewPublicationInput } from './dto/publication.input';
import { Category } from 'src/categories/models/category.model';
import { CategoriesService } from 'src/categories/categories.service';

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

    if (!publication) {
      throw new NotFoundException(id);
    }

    // Create an empty array to store categories
    const publicationCategories: Category[] = [];

    // Loop through each category ID in the publication's categories array
    for (const categoryID of publication.categories) {
      // Find the category by ID using the findOneById service provided by the CategoriesService
      const category: Category = await this.categoriesService.findOneById(
        categoryID,
      );

      // If the category exists, push it to the publicationCategories array
      if (category) {
        publicationCategories.push(category);
      }
    }

    return publicationCategories;
  }

  @Mutation((returns) => Publication)
  async createPublication(
    @Args('publicationInput') publicationInput: NewPublicationInput,
  ): Promise<Publication> {
    // Check if each category ID in the publicationInput exists
    // A publication can only be created if all category IDs exist
    for (const categoryID of publicationInput.categories) {
      const category = await this.categoriesService.findOneById(categoryID);
      if (!category) {
        throw new NotFoundException(categoryID);
      }
    }

    const publication = await this.publicationsService.create(publicationInput);
    return publication;
  }
}
