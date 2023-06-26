import {Field, ArgsType} from '@nestjs/graphql';

@ArgsType()
export class CategoriesArgs {
    
    @Field()
    id: string;

   
}