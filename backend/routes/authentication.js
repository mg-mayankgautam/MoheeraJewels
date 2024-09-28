const path = require('path');
const express = require('express');
const router = express.Router();
// const multer = require('multer')
// const storage = multer.memoryStorage()
// const upload = multer({ storage: storage })
// require("dotenv").config();

const authController = require('../controller/authController');


router.post('/login', authController.logIn)



module.exports = router;
