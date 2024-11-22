const { Router } = require('express');
const router = Router();

const enrollController = require('../src/controllers/enroll.controller')
const { verifyEnrollBody } = require('../src/middlewares/enroll.middleware')

router.get('/getAll', enrollController.getAllEnroll)
router.post('/addEnroll', verifyEnrollBody, enrollController.addEnroll)
router.get('/getOne/:id', enrollController.getOneEnroll)
router.delete('/deleteEnroll/:id', enrollController.deleteEnroll)

module.exports = router