const express = require('express');
const authController = require('../controllers/auth');
const router = express.Router();

router.post('/api/auth/register', authController.register);
router.post('/api/auth/login', authController.login);

module.exports = router;
