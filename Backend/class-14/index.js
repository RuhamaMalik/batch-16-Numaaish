const express = require('express');
const multer = require('multer');
const app = express();

////////// multer middleware

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "assets")
  },
  filename: function (req, file, cb) {
    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null, fileName);
  }
});

const upload = multer({ storage });

app.post('/api/uploads', upload.single("image"), (req, res) => {

  res.json({ message: 'Image uploaded successfully', image:req.file.filename});
})


app.listen(8000,()=>console.log('server is running'));

