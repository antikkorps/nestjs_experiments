export const multerOptions = {
  dest: './uploads',
  limits: {
    fileSize: 10000000, // 10MB
  },
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.startsWith('image/')) {
      return cb(new Error('Invalid file type'), false);
    }
    cb(null, true);
  },
};
