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
exports.AnnoncesController = void 0;
const common_1 = require("@nestjs/common");
const annonces_service_1 = require("./annonces.service");
const create_annonce_dto_1 = require("./dto/create-annonce.dto");
const update_annonce_dto_1 = require("./dto/update-annonce.dto");
const guard_1 = require("../auth/guard");
const decorator_1 = require("../auth/decorator");
let AnnoncesController = class AnnoncesController {
    constructor(annoncesService) {
        this.annoncesService = annoncesService;
    }
    create(userId, createAnnonceDto) {
        return this.annoncesService.create(userId, createAnnonceDto);
    }
    findAll() {
        return this.annoncesService.findAll();
    }
    findQuery(query, priceMin, priceMax, brand, yearofcirculation) {
        return this.annoncesService.findQuery({
            q: query,
            priceMin,
            priceMax,
            brand,
            yearofcirculation,
        });
    }
    findOne(id) {
        return this.annoncesService.findOne(+id);
    }
    update(userId, id, updateAnnonceDto) {
        return this.annoncesService.update(+id, updateAnnonceDto);
    }
    remove(id) {
        return this.annoncesService.remove(+id);
    }
};
exports.AnnoncesController = AnnoncesController;
__decorate([
    (0, common_1.UseGuards)(guard_1.jwtGuard),
    (0, common_1.Post)('new'),
    __param(0, (0, decorator_1.GetUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_annonce_dto_1.CreateAnnonceDto]),
    __metadata("design:returntype", void 0)
], AnnoncesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AnnoncesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)('q')),
    __param(1, (0, common_1.Query)('priceMin')),
    __param(2, (0, common_1.Query)('priceMax')),
    __param(3, (0, common_1.Query)('brand')),
    __param(4, (0, common_1.Query)('yearofcirculation')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number, String, Number]),
    __metadata("design:returntype", void 0)
], AnnoncesController.prototype, "findQuery", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AnnoncesController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(guard_1.jwtGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, decorator_1.GetUser)('id')),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, update_annonce_dto_1.UpdateAnnonceDto]),
    __metadata("design:returntype", void 0)
], AnnoncesController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(guard_1.jwtGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AnnoncesController.prototype, "remove", null);
exports.AnnoncesController = AnnoncesController = __decorate([
    (0, common_1.Controller)('annonces'),
    __metadata("design:paramtypes", [annonces_service_1.AnnoncesService])
], AnnoncesController);
//# sourceMappingURL=annonces.controller.js.map