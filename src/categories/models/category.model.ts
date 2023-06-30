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
  iconurl: string;

  @Field({ nullable: true })
  activefrom: string;

  @Field({ nullable: true })
  activeuntil: string;

  @Field()
  createdat?: string;

  @Field()
  updatedat?: string;
}
