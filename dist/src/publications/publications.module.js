"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicationsModule = void 0;
const common_1 = require("@nestjs/common");
const publications_service_1 = require("./publications.service");
const publications_resolver_1 = require("./publications.resolver");
const categories_module_1 = require("../categories/categories.module");
const category_entity_1 = require("../categories/category.entity");
const typeorm_1 = require("@nestjs/typeorm");
const publication_entity_1 = require("./publication.entity");
let PublicationsModule = exports.PublicationsModule = class PublicationsModule {
};
exports.PublicationsModule = PublicationsModule = __decorate([
    (0, common_1.Module)({
        providers: [publications_service_1.PublicationsService, publications_resolver_1.PublicationsResolver],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([publication_entity_1.PublicationEntity, category_entity_1.CategoryEntity]),
            categories_module_1.CategoriesModule,
        ],
    })
], PublicationsModule);
//# sourceMappingURL=publications.module.js.map