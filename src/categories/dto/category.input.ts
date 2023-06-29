import { Field, InputType, ID } from '@nestjs/graphql';

// TODO: Figure out why class-validator is not being recognized
//import {validate} from 'class-validator'

@InputType()
export class NewCategoryInput {
  @Field((type) => ID, { nullable: true })
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
}
