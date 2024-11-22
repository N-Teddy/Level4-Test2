const Course = require('../models/Course')
const Teacher = require('../models/Teacher')
const service = require('../service/service')

const verifyCourseBody = async (req, res, next) => {
    const { title, description, teacherId, type } = req.body;
    if (!title || !description || !teacherId || !type) { 
        return res.status(400).json({
            message: 'all Informations are required'
        })
    }

    const isCourseUnique = await service.verifyIfIsUnique(Course, 'title', title)
    if (isCourseUnique) {
        return res.status(400).json({
            massage: 'Course already exists'
        })
    }

    const isUserTeacher = await Teacher.findById(teacherId)
    if (!isUserTeacher) { 
        return res.status(400).json({
            message: 'User is not a teacher and cannot add a course'
        })
    }

    next()
}

module.exports = {verifyCourseBody}