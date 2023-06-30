"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const typeorm_1 = require("@nestjs/typeorm");
const path_1 = require("path");
const categories_module_1 = require("./categories/categories.module");
const publications_module_1 = require("./publications/publications.module");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.gql'),
            }),
            typeorm_1.TypeOrmModule.forRoot({
                name: 'default',
                type: 'postgres',
                url: 'postgres://mkheylow:NBAY8IYubPRvuk3o-5Vcj3p6dfJPUGzD@dumbo.db.elephantsql.com/mkheylow',
                entities: ['dist/**/*.entity{.ts,.js}'],
                synchronize: true,
            }),
            categories_module_1.CategoriesModule,
            publications_module_1.PublicationsModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map