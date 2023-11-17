"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateHoraireDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_horaire_dto_1 = require("./create-horaire.dto");
class UpdateHoraireDto extends (0, mapped_types_1.PartialType)(create_horaire_dto_1.CreateHoraireDto) {
}
exports.UpdateHoraireDto = UpdateHoraireDto;
//# sourceMappingURL=update-horaire.dto.js.map