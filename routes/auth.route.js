const { Router } = require('express');
const router = Router();

const authController = require('../src/controllers/auth.controller')
const { verifyRegisterBody, verifyLoginBody } = require('../src/middlewares/auth.middleware')

router.post('/register', verifyRegisterBody, authController.register)
router.post('/login', verifyLoginBody, authController.login)

module.exports = router