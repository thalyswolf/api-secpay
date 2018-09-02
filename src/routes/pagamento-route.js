'use strict'
const express = require('express');
const router = express.Router();
const controller = require('../controllers/pagamento-controller');

router.post('/', controller.create);
///router.get('/', controller.get);
router.put('/confirmar', controller.confirmar);


module.exports = router;
