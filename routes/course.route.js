const { Router } = require('express');
const router = Router();

const courseController = require('../src/controllers/course.controller')
const { verifyCourseBody } = require('../src/middlewares/course.middleware')

router.get('/getAll', courseController.getAllCourses)
router.post('/addCourse', verifyCourseBody, courseController.addCourse)
router.get('/getOne/:id', courseController.getOneCourse)
router.put('/updateCourse/:id', verifyCourseBody, courseController.updateCourse)
router.delete('/deleteCourse/:id', courseController.deleteCourse)

module.exports = router