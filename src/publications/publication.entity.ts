import { Column, Entity, PrimaryColumn } from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class PublicationEntity {
  @PrimaryColumn({ unique: true })
  @Field(() => ID)
  id: string;

  @Column()
  @Field()
  slug: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  coverurl: string;

  @Column()
  @Field()
  publishfrom: string;

  @Column()
  @Field()
  publishuntil: string;

  @Column('jsonb', { nullable: true })
  @Field(() => [String])
  categories: string[];
}
