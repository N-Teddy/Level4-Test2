const { Schema, model } = require('mongoose')
const mongoose = require('mongoose')

const studentSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'Teacher',
        required: true,
    },
}, {
    timestamps: true
})

module.exports = model('Student', studentSchema)