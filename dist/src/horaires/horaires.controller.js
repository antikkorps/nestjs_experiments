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
exports.HorairesController = void 0;
const common_1 = require("@nestjs/common");
const horaires_service_1 = require("./horaires.service");
const create_horaire_dto_1 = require("./dto/create-horaire.dto");
const update_horaire_dto_1 = require("./dto/update-horaire.dto");
const guard_1 = require("../auth/guard");
const decorator_1 = require("../auth/decorator");
let HorairesController = class HorairesController {
    constructor(horairesService) {
        this.horairesService = horairesService;
    }
    create(userId, createHoraireDto) {
        return this.horairesService.create(createHoraireDto);
    }
    findAll() {
        return this.horairesService.findAll();
    }
    findOne(id) {
        return this.horairesService.findOne(+id);
    }
    update(userId, id, updateHoraireDto) {
        return this.horairesService.update(+id, updateHoraireDto);
    }
    remove(id) {
        return this.horairesService.remove(+id);
    }
};
exports.HorairesController = HorairesController;
__decorate([
    (0, common_1.UseGuards)(guard_1.jwtGuard),
    (0, common_1.Post)('new'),
    __param(0, (0, decorator_1.GetUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_horaire_dto_1.CreateHoraireDto]),
    __metadata("design:returntype", void 0)
], HorairesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HorairesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HorairesController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(guard_1.jwtGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, decorator_1.GetUser)('id')),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, update_horaire_dto_1.UpdateHoraireDto]),
    __metadata("design:returntype", void 0)
], HorairesController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(guard_1.jwtGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HorairesController.prototype, "remove", null);
exports.HorairesController = HorairesController = __decorate([
    (0, common_1.Controller)('horaires'),
    __metadata("design:paramtypes", [horaires_service_1.HorairesService])
], HorairesController);
//# sourceMappingURL=horaires.controller.js.map