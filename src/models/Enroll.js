const { Schema, model } = require('mongoose')
const mongoose = require('mongoose')

const enrollSchema = new Schema({
    studentId: {
        type: Schema.Types.ObjectId,
        ref: 'Student',
        required: true,
    },
    courseId: {
        type: Schema.Types.ObjectId,
        ref: 'Teacher',
        required: true,
    }
}, {
    timestamps: true
})

module.exports = model('Enroll', enrollSchema)