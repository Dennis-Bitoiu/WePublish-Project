import { ObjectType, Field, ID } from '@nestjs/graphql';
import { type } from 'os';

@ObjectType()
export class Category {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  slug: string;

  @Field()
  iconUrl: string;

  @Field({ nullable: true })
  activeFrom: string;

  @Field({ nullable: true })
  activeUntil: string;

  @Field()
  createdAt?: string;

  @Field()
  updatedAt?: string;
}
