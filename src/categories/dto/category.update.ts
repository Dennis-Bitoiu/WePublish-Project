import { Field, InputType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateCategoryInput {
  @Field((type) => ID, { nullable: true })
  id: string;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  slug: string;

  @Field({ nullable: true })
  iconUrl: string;

  @Field({ nullable: true })
  activeFrom: string;

  @Field({ nullable: true })
  activeUntil: string;
}
