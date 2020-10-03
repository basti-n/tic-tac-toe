const { Router } = require('express');
const resultController = require('../controllers/resultController');

const router = Router();

router.post('/', resultController.post_result);

module.exports = router;
