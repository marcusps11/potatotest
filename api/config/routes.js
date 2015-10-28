var express = require('express'),
router = express.Router(),
bodyParser = require('body-parser'),
methodOverride = require('method-override');

var charactersController = require('../controllers/photos');

router.route('/')
.get(charactersController.getAll)

module.exports = router