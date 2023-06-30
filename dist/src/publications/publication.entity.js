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
exports.PublicationEntity = void 0;
const typeorm_1 = require("typeorm");
const graphql_1 = require("@nestjs/graphql");
let PublicationEntity = exports.PublicationEntity = class PublicationEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ unique: true }),
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", String)
], PublicationEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], PublicationEntity.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], PublicationEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], PublicationEntity.prototype, "coverurl", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], PublicationEntity.prototype, "publishfrom", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], PublicationEntity.prototype, "publishuntil", void 0);
__decorate([
    (0, typeorm_1.Column)('jsonb', { nullable: true }),
    (0, graphql_1.Field)(() => [String]),
    __metadata("design:type", Array)
], PublicationEntity.prototype, "categories", void 0);
exports.PublicationEntity = PublicationEntity = __decorate([
    (0, typeorm_1.Entity)(),
    (0, graphql_1.ObjectType)()
], PublicationEntity);
//# sourceMappingURL=publication.entity.js.map