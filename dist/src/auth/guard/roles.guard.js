"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rolesGuard = void 0;
const passport_1 = require("@nestjs/passport");
class rolesGuard extends (0, passport_1.AuthGuard)('jwt') {
    constructor() {
        super();
    }
}
exports.rolesGuard = rolesGuard;
//# sourceMappingURL=roles.guard.js.map