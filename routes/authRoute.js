const express = require('express');

const controller = require('../controllers/authController.js');

const router = express.Router();

router.get("/login", controller.login);
router.post("/login", controller.postLogin)

module.exports = router;