const { Schema, model } = require('mongoose')


const courseSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['text', 'video'],
        required: true
    },
    teacherId: {
        type: Schema.Types.ObjectId,
        ref: 'Teacher',
        required: true,
    },
},
    {
    timestamps: true
    }   
)

module.exports = model('Course', courseSchema);