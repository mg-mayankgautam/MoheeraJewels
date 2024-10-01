const path = require('path');
const express = require('express');
const router = express.Router();
// const multer  = require('multer')
// const storage = multer.memoryStorage()
// const upload = multer({ storage: storage })
require("dotenv").config();
// const verifyJWT = require('../middleware/verifyJWT')

const refreshTokenController = require('../controller/refreshTokenController');

router.get('/',refreshTokenController.handleRefreshToken)


module.exports = router;