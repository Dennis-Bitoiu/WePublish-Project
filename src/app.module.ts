import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { CategoriesModule } from './categories/categories.module';
import { PublicationsModule } from './publications/publications.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot({
      // These would normally be in a .env file
      name: 'default',
      type: 'postgres',
      url: 'postgres://mkheylow:NBAY8IYubPRvuk3o-5Vcj3p6dfJPUGzD@dumbo.db.elephantsql.com/mkheylow',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    CategoriesModule,
    PublicationsModule,
  ],
})
export class AppModule {}
