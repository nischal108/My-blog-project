const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

// Define storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/uploads');
  },
  filename: function (req, file, cb) {
    crypto.randomBytes(10, (err, buf) => {
      if (err) return cb(err);

      const uniqueSuffix = buf.toString('hex');
      const fileExtension = path.extname(file.originalname);
      const fileName = `${uniqueSuffix}${fileExtension}`;

      cb(null, fileName);
    });
  }
});

// Initialize Multer with storage configuration
const upload = multer({ storage: storage });

module.exports = upload;
