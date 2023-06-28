import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class UpdatePublicationInput {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field({ nullable: true })
  slug: string;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  coverUrl: string;

  @Field({ nullable: true })
  publishFrom: string;

  @Field({ nullable: true })
  publishUntil: string;

  @Field(() => [ID], { nullable: true })
  categories: string[];
}
