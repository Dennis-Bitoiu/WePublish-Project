import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Category } from '../../categories/models/category.model';

@ObjectType()
export class Publication {
  @Field((type) => ID)
  id: string;

  @Field()
  slug: string;

  @Field()
  name: string;

  @Field()
  coverUrl: string;

  @Field()
  publishFrom: string;

  @Field()
  publishUntil: string;

  @Field((type) => [Category])
  categories: Category[];
}
