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
exports.CategoriesResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const graphql_2 = require("@nestjs/graphql");
const categories_service_1 = require("./categories.service");
const categories_args_1 = require("./dto/categories.args");
const category_input_1 = require("./dto/category.input");
const category_update_1 = require("./dto/category.update");
const category_model_1 = require("./models/category.model");
const category_entity_1 = require("./category.entity");
let CategoriesResolver = exports.CategoriesResolver = class CategoriesResolver {
    constructor(categoriesService) {
        this.categoriesService = categoriesService;
    }
    getCategories() {
        return this.categoriesService.findAll();
    }
    async getCategory(args) {
        try {
            const { id } = args;
            const category = await this.categoriesService.findOneById(id);
            return category;
        }
        catch (error) {
            throw new common_1.NotFoundException(error);
        }
    }
    async createCategory(newCategoryData) {
        try {
            const category = await this.categoriesService.create(newCategoryData);
            return category;
        }
        catch (error) {
            throw new common_1.BadRequestException(error);
        }
    }
    async removeCategory(args) {
        const { id } = args;
        try {
            return await this.categoriesService.removeOneById(id);
        }
        catch (error) {
            throw new common_1.NotFoundException(error);
        }
    }
    async updateCategory(args, updateCategoryInput) {
        try {
            const { id } = args;
            const updatedCategory = await this.categoriesService.updateOneById(id, updateCategoryInput);
            return updatedCategory;
        }
        catch (error) {
            throw new common_1.NotFoundException(error);
        }
    }
};
__decorate([
    (0, graphql_1.Query)((returns) => [category_model_1.Category], { name: 'categories' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoriesResolver.prototype, "getCategories", null);
__decorate([
    (0, graphql_1.Query)((returns) => category_entity_1.CategoryEntity, { name: 'category' }),
    __param(0, (0, graphql_2.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [categories_args_1.CategoriesArgs]),
    __metadata("design:returntype", Promise)
], CategoriesResolver.prototype, "getCategory", null);
__decorate([
    (0, graphql_1.Mutation)((returns) => category_model_1.Category),
    __param(0, (0, graphql_2.Args)('newCategoryData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_input_1.NewCategoryInput]),
    __metadata("design:returntype", Promise)
], CategoriesResolver.prototype, "createCategory", null);
__decorate([
    (0, graphql_1.Mutation)(() => category_entity_1.CategoryEntity),
    __param(0, (0, graphql_2.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [categories_args_1.CategoriesArgs]),
    __metadata("design:returntype", Promise)
], CategoriesResolver.prototype, "removeCategory", null);
__decorate([
    (0, graphql_1.Mutation)(() => category_model_1.Category),
    __param(0, (0, graphql_2.Args)()),
    __param(1, (0, graphql_2.Args)('updateCategoryInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [categories_args_1.CategoriesArgs,
        category_update_1.UpdateCategoryInput]),
    __metadata("design:returntype", Promise)
], CategoriesResolver.prototype, "updateCategory", null);
exports.CategoriesResolver = CategoriesResolver = __decorate([
    (0, graphql_2.Resolver)((of) => category_model_1.Category),
    __metadata("design:paramtypes", [categories_service_1.CategoriesService])
], CategoriesResolver);
//# sourceMappingURL=categories.resolver.js.map