import { Module } from '@nestjs/common';
import { PublicationsService } from './publications.service';
import { PublicationsResolver } from './publications.resolver';
import { CategoriesModule } from 'src/categories/categories.module';
import { CategoryEntity } from '../categories/category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PublicationEntity } from './publication.entity';

@Module({
  providers: [PublicationsService, PublicationsResolver],
  imports: [
    TypeOrmModule.forFeature([PublicationEntity, CategoryEntity]),
    CategoriesModule,
  ],
})
export class PublicationsModule {}
