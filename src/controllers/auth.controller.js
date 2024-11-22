const User = require('../models/User')
const Teacher = require('../models/Teacher')
const Student = require('../models/Student')
const service = require('../service/service')
const jwt = require('jsonwebtoken');



const register = async (req, res) => {

    try {
        const body = req.body
        const hash = await service.hashPassword(body.password)
        body.password = hash

        const user = await new User(body).save();
        if (body.role === 'student') {
            const student = new Student({ userId: user._id });
            await student.save();
        } else {
            const teacher = new Teacher({ userId: user._id });
            await teacher.save();
        }

        return res.status(201).json({
            massage: 'User registered successfully',
            user
        })

    } catch (error) {
        console.log('Error occured while creating user:', + error);        
    }
}

const login = async (req, res) => {
    try {
        const comparePassword = await service.passwordCompare(req.body.password, req.user.password)
        if (!comparePassword) {
            return res.json({
                message: 'Invalid password or Email'
            })
        }

        const token = jwt.sign({ id: req.user._id }, 'secret_key', { expiresIn: '1h' });
        return res.json({
            message: 'User logged in successfully',
            token
        })

    } catch (error) {
        
    }
}



module.exports = {register, login}