"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerOptions = void 0;
exports.multerOptions = {
    dest: './uploads',
    limits: {
        fileSize: 10000000,
    },
    fileFilter: (req, file, cb) => {
        if (!file.mimetype.startsWith('image/')) {
            return cb(new Error('Invalid file type'), false);
        }
        cb(null, true);
    },
};
//# sourceMappingURL=multer.options.js.map