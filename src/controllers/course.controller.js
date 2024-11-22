const Course = require('../models/Course');
const Teacher = require('../models/Teacher');


const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (error) {
        res.status(500).json({
            message: 'failed to get all courses'
        })
    }
}

const getOneCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const course = await Course.find({ _id: id });
        if (!course) {
            res.status(404).json({
                message: 'course not found'
            })
        } else {
            res.json(course);
        }
    } catch (error) {

    }
}

const addCourse = async (req, res) => {

    try {
        const body = req.body;
        const course = await new Course(body).save()
        res.status(201).json({
            message: 'course added successfully',
            course
        });
    } catch (error) {
        res.status(400).json({
            message: 'failed to add course'
        })
    }

}

const updateCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        await Course.findByIdAndUpdate(id, { ...body });
        res.json({
            message: 'course updated successfully'
        });
    } catch (error) {
        res.status(404).json({
            message: 'Course not found'
        });
    }
}
const deleteCourse = async (req, res) => {
    try {
        const { id } = req.params;
        await Course.findByIdAndDelete(id);
        res.json({
            message: 'course deleted successfully'
        });
    } catch (error) {
        res.status(404).json({
            message: 'course not found'
        })
    }
}

module.exports = { getAllCourses, getOneCourse, addCourse, deleteCourse, updateCourse }