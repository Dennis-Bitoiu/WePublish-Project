import { Column, Entity, PrimaryColumn } from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class CategoryEntity {
  @PrimaryColumn({ unique: true })
  @Field()
  id: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  slug: string;

  @Column()
  @Field()
  iconurl: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  activefrom: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  activeuntil: string;

  @Column()
  @Field()
  createdat: string;

  @Column()
  @Field()
  updatedat: string;
}
