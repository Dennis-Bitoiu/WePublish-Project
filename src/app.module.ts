import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {GraphQLModule} from '@nestjs/graphql';
import {ApolloDriver, ApolloDriverConfig} from '@nestjs/apollo';
import { join } from 'path';
import {CategoriesModule} from './categories/categories.module';
import { PublicationsModule } from './publications/publications.module';

@Module({
  imports: [ GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  }), CategoriesModule, PublicationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
