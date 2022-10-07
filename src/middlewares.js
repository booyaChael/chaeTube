import multer from "multer";
export const videoUpload = multer({
    dest: "public/uploads/",
    limits: 300000000,
});