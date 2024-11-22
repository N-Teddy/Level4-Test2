const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test1-sep-2024')
    .then(() => {

        const PORT = 3000;
        const app = express();
        app.use(express.json());

        app.listen(3000, () => console.log('Application listening on http://localhost:' + PORT));
    })
    .catch(err => {
        console.error(err)
    });