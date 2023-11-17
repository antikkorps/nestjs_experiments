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
exports.AnnoncesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const create_annonce_dto_1 = require("./dto/create-annonce.dto");
const decorator_1 = require("../auth/decorator");
let AnnoncesService = class AnnoncesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(userId, createAnnonceDto) {
        return this.prisma.annonce.create({
            data: {
                ...createAnnonceDto,
                author: {
                    connect: { id: userId },
                },
            },
        });
    }
    async findAll() {
        return this.prisma.annonce.findMany();
    }
    async findQuery(query) {
        try {
            const whereCondition = {
                AND: [],
            };
            if (query.q) {
                whereCondition.AND.push({
                    OR: [
                        {
                            title: {
                                contains: query.q,
                                mode: 'insensitive',
                            },
                        },
                        {
                            description: {
                                contains: query.q,
                                mode: 'insensitive',
                            },
                        },
                    ],
                });
            }
            if (query.priceMin || query.priceMax) {
                const minRange = parseInt(query.priceMin);
                const maxRange = parseInt(query.priceMax);
                whereCondition.AND.push({
                    price: {
                        gte: minRange || 0,
                        lte: maxRange || Number.MAX_SAFE_INTEGER,
                    },
                });
            }
            if (query.brand) {
                const brands = Array.isArray(query.brand) ? query.brand : [query.brand];
                whereCondition.AND.push({
                    brand: {
                        in: brands,
                    },
                });
            }
            if (query.yearofcirculation) {
                const years = Array.isArray(query.yearofcirculation)
                    ? query.yearofcirculation.map((yearofcirculation) => parseInt(yearofcirculation))
                    : [parseInt(query.yearofcirculation)];
                whereCondition.AND.push({
                    yearofcirculation: {
                        in: years,
                    },
                });
            }
            return await this.prisma.annonce.findMany({
                where: whereCondition,
            });
        }
        catch (error) {
            console.error("Erreur lors de la recherche d'annonces :", error);
            throw error;
        }
    }
    async findOne(id) {
        return this.prisma.annonce.findUnique({
            where: { id },
        });
    }
    async update(id, updateAnnonceDto) {
        console.log(updateAnnonceDto);
        return this.prisma.annonce.update({
            where: { id },
            data: { ...updateAnnonceDto },
        });
    }
    remove(id) {
        return this.prisma.annonce.delete({
            where: { id },
        });
    }
};
exports.AnnoncesService = AnnoncesService;
__decorate([
    __param(0, (0, decorator_1.GetUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_annonce_dto_1.CreateAnnonceDto]),
    __metadata("design:returntype", Promise)
], AnnoncesService.prototype, "create", null);
exports.AnnoncesService = AnnoncesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AnnoncesService);
//# sourceMappingURL=annonces.service.js.map