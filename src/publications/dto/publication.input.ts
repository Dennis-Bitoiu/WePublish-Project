import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class NewPublicationInput {
  @Field(() => ID)
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

  @Field(() => [ID])
  categories: string[];
}
