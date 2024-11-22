const bcrypt = require('bcrypt');

const verifyIfIsUnique = async (model, field, value) => {
    return await model.findOne({ [field]: value })
}

const hashPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    } catch (error) {
        throw new Error('Invalid password: ' + error.message)
    }
}

const passwordCompare = async (value, hash) => {
    try {
        return await bcrypt.compare(value, hash);
    } catch (error) {
        return false;
    }
}

module.exports = {verifyIfIsUnique, hashPassword, passwordCompare}