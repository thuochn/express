const express = require('express');

const controller = require('../controllers/userController.js');

const validate = require('../validate/userValidate.js');
const authMiddleware = require('../middleware/authMiddleware.js');

const router = express.Router();

router.get("/", controller.index);

router.get('/search', controller.search);

router.get('/create', controller.create);

router.get('/:id', controller.get);

router.post('/create', validate.postCreate, controller.postCreate);

module.exports = router;