import { Column, Entity, PrimaryColumn } from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class CategoryEntity {
  @PrimaryColumn({ unique: true })
  @Field((type) => ID)
  id: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  slug: string;

  @Column()
  @Field()
  iconUrl: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  activeFrom: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  activeUntil: string;

  @Column()
  @Field()
  createdAt?: string;

  @Column()
  @Field()
  updatedAt?: string;
}
