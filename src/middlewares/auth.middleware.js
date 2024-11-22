const service = require('../service/service')
const User = require('../models/User')

//Register

const verifyRegisterBody = async (req, res, next) => {
    const body = req.body;

    // verify if all information are provided
    if (
        !body.firstName ||!body.lastName || !body.email
        || !body.password ||!body.role
    ) {
        return res.status(400).json({
            message: 'all Informations are required'
        })
    }

    // verify if email is unique
    const isEmailUnique = await service.verifyIfIsUnique(User, 'email', body.email)
    if (isEmailUnique) {
        return res.status(400).json({
            massage: 'Email already exists'
        })
    }
    next()

}

// Login

const verifyLoginBody = async (req, res, next) => {
    const body = req.body;

    // verify if email and passwort are provided
    if (!body.email || !body.password) {
        return res.status(400).json({
            message: 'body must contain email and password'
        })
    }

    // verify if user exist 
    const isUserExist = await service.verifyIfIsUnique( User, 'email', body.email)
    if (!isUserExist) {
        return res.status(400).json({
            message: 'invalid email'
        })
    }

    req.user = isUserExist;
    console.log(isUserExist.password);
    
    next();

}






module.exports = { verifyRegisterBody, verifyLoginBody }