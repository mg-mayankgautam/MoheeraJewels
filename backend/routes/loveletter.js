const path = require('path');
const express = require('express');
const router = express.Router();
// const multer = require('multer')
// const storage = multer.memoryStorage()
// const upload = multer({ storage: storage })
// require("dotenv").config();

const loveLetterController = require('../controller/loveLetterController');



router.post('/post', loveLetterController.postLoveLetter);

module.exports = router;
