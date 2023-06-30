"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicationsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const graphql_2 = require("@nestjs/graphql");
const publications_service_1 = require("./publications.service");
const publication_model_1 = require("./models/publication.model");
const publication_entity_1 = require("./publication.entity");
const publications_args_1 = require("./dto/publications.args");
const publication_input_1 = require("./dto/publication.input");
const publication_update_1 = require("./dto/publication.update");
const category_model_1 = require("../categories/models/category.model");
const categories_service_1 = require("../categories/categories.service");
let PublicationsResolver = exports.PublicationsResolver = class PublicationsResolver {
    constructor(publicationsService, categoriesService) {
        this.publicationsService = publicationsService;
        this.categoriesService = categoriesService;
    }
    async getPublications() {
        return this.publicationsService.findAll();
    }
    async getPublicationById(args) {
        const { id } = args;
        const publication = await this.publicationsService.findOneById(id);
        if (!publication) {
            throw new common_1.NotFoundException(id);
        }
        return publication;
    }
    async getPublicationCategories(args) {
        const { id } = args;
        const publication = await this.publicationsService.findOneById(id);
        if (!publication) {
            throw new common_1.NotFoundException('Publication not found');
        }
        const publicationCategories = await this.categoriesService.findAllByIds(publication.categories);
        return publicationCategories;
    }
    async createPublication(publicationInput) {
        const publication = await this.publicationsService.create(publicationInput);
        return publication;
    }
    async removePublication(args) {
        const { id } = args;
        return await this.publicationsService.removeOneById(id);
    }
    async updatePublication(args, updatePublicationInput) {
        try {
            const { id } = args;
            const updatedPublication = await this.publicationsService.updateOneById(id, updatePublicationInput);
            return updatedPublication;
        }
        catch (error) {
            throw new common_1.NotFoundException(error);
        }
    }
};
__decorate([
    (0, graphql_2.Query)(() => [publication_entity_1.PublicationEntity], { name: 'publications' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PublicationsResolver.prototype, "getPublications", null);
__decorate([
    (0, graphql_2.Query)(() => publication_entity_1.PublicationEntity, { name: 'publication' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [publications_args_1.PublicationsArgs]),
    __metadata("design:returntype", Promise)
], PublicationsResolver.prototype, "getPublicationById", null);
__decorate([
    (0, graphql_2.Query)(() => [category_model_1.Category], { name: 'publicationCategories' }),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [publications_args_1.PublicationsArgs]),
    __metadata("design:returntype", Promise)
], PublicationsResolver.prototype, "getPublicationCategories", null);
__decorate([
    (0, graphql_2.Mutation)(() => publication_entity_1.PublicationEntity),
    __param(0, (0, graphql_1.Args)('publicationInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [publication_input_1.NewPublicationInput]),
    __metadata("design:returntype", Promise)
], PublicationsResolver.prototype, "createPublication", null);
__decorate([
    (0, graphql_2.Mutation)(() => publication_entity_1.PublicationEntity),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [publications_args_1.PublicationsArgs]),
    __metadata("design:returntype", Promise)
], PublicationsResolver.prototype, "removePublication", null);
__decorate([
    (0, graphql_2.Mutation)(() => publication_model_1.Publication),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, graphql_1.Args)('updatePublicationInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [publications_args_1.PublicationsArgs,
        publication_update_1.UpdatePublicationInput]),
    __metadata("design:returntype", Promise)
], PublicationsResolver.prototype, "updatePublication", null);
exports.PublicationsResolver = PublicationsResolver = __decorate([
    (0, graphql_1.Resolver)((of) => publication_entity_1.PublicationEntity),
    __metadata("design:paramtypes", [publications_service_1.PublicationsService,
        categories_service_1.CategoriesService])
], PublicationsResolver);
//# sourceMappingURL=publications.resolver.js.map