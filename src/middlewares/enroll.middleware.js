const Enroll = require('../models/Enroll')
const Course = require('../models/Course')
const Student = require('../models/Student')

const verifyEnrollBody = async (req, res, next) => {
    const { courseId, studentId } = req.body

    if (!courseId || !studentId) {
        return res.status(400).json({
            message: 'Course ID and Student ID are required'
        })
    }

    const isCourseExist = await Course.findById(courseId)
    if (!isCourseExist) {
        return res.status(400).json({
            message: 'Course does not exist'
        })
    }

    const isStudentExist = await Student.findById(studentId)
    if (!isStudentExist) {
        return res.status(400).json({
            message: 'Student does not exist'
        })
    }
    next()

}

module.exports = {verifyEnrollBody}