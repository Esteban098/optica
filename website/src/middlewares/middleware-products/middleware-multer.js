const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  //seteo => donde guarda multer los archivos
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../../public/img/products"));
  },

  //seteo=> Con que nombre guarda multer los archivos
  filename: (req, file, cb) => {
    const extension = path.extname(file.originalname);
    const newFileName = `product_${Date.now()}` + extension;
    cb(null, newFileName);
  },
});

const uploadFiles = multer({
  storage,
  /*  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      req.MulterImgInvalidFormat =
        "Error: formato no valido, solo se permiten los siguientes formatos jpeg ";
    }
  }, */
});
module.exports = uploadFiles;
