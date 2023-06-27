import { Module } from '@nestjs/common';
import { PublicationsService } from './publications.service';
import { PublicationsResolver } from './publications.resolver';
import { CategoriesModule } from 'src/categories/categories.module';

@Module({
  providers: [PublicationsService, PublicationsResolver],
  imports: [CategoriesModule],
})
export class PublicationsModule {}
