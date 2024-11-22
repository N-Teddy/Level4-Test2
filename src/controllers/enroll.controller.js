const Enroll = require('../models/Enroll');


const getAllEnroll = async (req, res) => {
    try {
        const enrolls = await Enroll.find();
        res.json(enrolls);
    } catch (error) {
        res.status(500).json({
            message: 'failed to get all Enroll'
        })
    }
}

const getOneEnroll = async (req, res) => {
    try {
        const { id } = req.params;
        const enroll = await Enroll.find({ _id: id });
        if (!enroll) {
            res.status(404).json({
                message: 'enroll not found'
            })
        } else {
            res.json(enroll);
        }
    } catch (error) {

    }
}

const addEnroll = async (req, res) => {

    try {
        const body = req.body;
        const enroll = await new Enroll(body).save()
        res.status(201).json({
            message: 'Enroll added successfully',
            enroll
        });
    } catch (error) {
        res.status(400).json({
            message: 'failed to add Enroll'
        })
    }

}


const deleteEnroll = async (req, res) => {
    try {
        const { id } = req.params;
        await Enroll.findByIdAndDelete(id);
        res.json({
            message: 'enroll deleted successfully'
        });
    } catch (error) {
        res.status(404).json({
            message: 'enroll not found'
        })
    }
}

module.exports = { getAllEnroll, deleteEnroll, addEnroll, getOneEnroll }