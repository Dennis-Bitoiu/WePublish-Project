import { ObjectType, Field} from '@nestjs/graphql';

@ObjectType()
export class Category {
    @Field()
    id: string;

    @Field()
    name: string;
    
    @Field()
    slug: string;
    
    @Field()
    iconUrl: string;
    
    @Field({nullable: true})
    activeFrom: string;

    @Field({nullable: true})
    activeUntil: string;

    @Field()
    createdAt?: string;

    @Field()
    updatedAt?: string;
}