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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryEntity = void 0;
const typeorm_1 = require("typeorm");
const graphql_1 = require("@nestjs/graphql");
let CategoryEntity = exports.CategoryEntity = class CategoryEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ unique: true }),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CategoryEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CategoryEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CategoryEntity.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CategoryEntity.prototype, "iconurl", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CategoryEntity.prototype, "activefrom", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CategoryEntity.prototype, "activeuntil", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CategoryEntity.prototype, "createdat", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CategoryEntity.prototype, "updatedat", void 0);
exports.CategoryEntity = CategoryEntity = __decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)()
], CategoryEntity);
//# sourceMappingURL=category.entity.js.map