import { Field, ArgsType, ID } from '@nestjs/graphql';

@ArgsType()
export class PublicationsArgs {
  @Field(() => ID)
  id: string;
}
