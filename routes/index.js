const express = require('express');
const router = express.Router();

const controller = require('../controller/index')

router.get('/', controller.main);
router.post('/calendar',controller.calendar);
router.post('/eventData', controller.eventData);
module.exports = router;