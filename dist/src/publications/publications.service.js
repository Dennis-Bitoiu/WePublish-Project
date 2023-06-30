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
exports.PublicationsService = void 0;
const common_1 = require("@nestjs/common");
const publications_1 = require("../../data/publications");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const publication_entity_1 = require("./publication.entity");
let PublicationsService = exports.PublicationsService = class PublicationsService {
    constructor(publicationRepository) {
        this.publicationRepository = publicationRepository;
    }
    async findAll() {
        const publications = await this.publicationRepository.find();
        return publications;
    }
    async findOneById(id) {
        const publication = await this.publicationRepository.find({
            where: {
                id: id,
            },
        });
        return publication[0];
    }
    async findOneBySlug(slug) {
        const publication = publications_1.publications.find((pub) => pub.slug === slug);
        return publication;
    }
    async create(publicationInput) {
        const newPublication = this.publicationRepository.create(publicationInput);
        return await this.publicationRepository.save(newPublication);
    }
    async removeOneById(id) {
        const publication = await this.findOneById(id);
        if (!publication) {
            throw new Error('Publication not found');
        }
        const removedPublication = await this.publicationRepository.remove(publication);
        return removedPublication;
    }
    async updateOneById(id, updatePublicationInput) {
        let publication = await this.findOneById(id);
        if (!publication) {
            throw new common_1.NotFoundException('Publication not found');
        }
        const updatedPublication = {
            ...publication,
            ...updatePublicationInput,
        };
        return this.publicationRepository.save(updatedPublication);
    }
};
exports.PublicationsService = PublicationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(publication_entity_1.PublicationEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PublicationsService);
//# sourceMappingURL=publications.service.js.map