const express = require('express');
const cors = require('cors');
require('dotenv').config()
const multer  = require('multer')
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.route("/api/fileanalyse")
  .post(multer().single("upfile"), (req, res) => {
    res.json({
      name: req.file.originalname,
      type: req.file.mimetype,
      size: req.file.size
      });
  });


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
