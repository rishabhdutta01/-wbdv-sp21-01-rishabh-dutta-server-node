const express = require('express')
const app = express()

const cors = require("cors")
app.use(cors())

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://webdev:webdev@whiteboardwebdev.yhvle.mongodb.net/webdevdb?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true});
// mongoose.connect('mongodb://localhost:27017/whiteboard',
//     {useNewUrlParser: true, useUnifiedTopology: true});

// configure CORS
// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers',
//         'Content-Type, X-Requested-With, Origin');
//     res.header('Access-Control-Allow-Methods',
//         'GET, POST, PUT, PATCH, DELETE, OPTIONS');
//     next();
// });

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
require('./controllers/quizzes-controller')(app)
require('./controllers/questions-controller')(app)
require('./controllers/quiz-attempts-controller')(app)

const port = process.env.PORT || 3001
app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});