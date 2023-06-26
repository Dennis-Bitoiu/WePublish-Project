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
    
    @Field()
    activeFrom: string;

    @Field()
    activeUntil: string;

    @Field({nullable: true})
    createdAt?: string;

    @Field({nullable: true})
    updatedAt?: string;
}