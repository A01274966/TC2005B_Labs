const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const ruta1_controller = require('../controllers/ruta1_controller');

router.use(bodyParser.urlencoded({ extended: false }));

router.use('/', (ruta1_controller.get));

module.exports = router;