const path = require("path");
const multer = require("multer");

const upload = multer({
    dest: "uploads/",
    limits: { fileSize: 50 * 1024 * 1024 }, // 50mb max size

    // limits: { fileSize: 3221225472 }, // 3GB max size
     
    storage: multer.diskStorage({
        destination: "uploads/",
        filename: (_req, file, cb) => {
            cb(null, file.originalname);
        },
    }),

    fileFilter: (_req, file, cb) => {
        let ext = path.extname(file.originalname);
        const allowedExtensions = [".jpg", ".jpeg", ".webp", ".png", ".jfif"];

        if (!allowedExtensions.includes(ext)) {
            cb(new Error(`Unsupported file type: ${ext}`), false);
            return;
        }
        cb(null, true);
    },
});

module.exports = upload;
