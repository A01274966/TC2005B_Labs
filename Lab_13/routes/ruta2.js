const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const ruta2_controller = require('../controllers/ruta2_controller');

router.use(bodyParser.urlencoded({ extended: false }));

router.use('/', (ruta2_controller.get));

module.exports = router;