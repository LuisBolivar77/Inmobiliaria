const path = require('path');
const fs = require('fs');
const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser')
const app = express();
const router = express.Router();

const DIR = './uploads';
 
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, DIR);
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + '.' + path.extname(file.originalname));
    }
});
let upload = multer({storage: storage});
