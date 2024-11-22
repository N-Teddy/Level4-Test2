require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');


mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        const app = express();
        app.use(bodyParser.json());

        app.use(cors({
            origin: 'http://localhost:3000',
            methods: ['GET', 'POST'],
            credentials: true,
        }))

        app.use(express.json());

        const authRoute = require('./routes/auth.route')
        const courseRoute = require('./routes/course.route')
        const enrollRoute = require('./routes/enroll.route')

        app.use('/api/auth', authRoute);
        app.use('/api/course', courseRoute);
        app.use('/api/enroll', enrollRoute);

        app.listen(process.env.PORT, () =>
            console.log('Application listening on http://localhost:' + process.env.PORT));
    })
    .catch(err => {
        console.error(err)
    });