const express = require('express');
require('dotenv').config();
const app = express();
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');

// view engine middleware
app.set("view engine", "ejs");

// regular middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// cookies and file upload middleware
app.use(cookieParser());
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));

// morgan middleware
app.use(morgan('tiny'))


// import all routes here
const home = require('./routes/home');
const user = require('./routes/user');

// router middleware
app.use('/api/v1', home);
app.use('/api/v1', user);

app.get('/signuptest', (req, res) => {
    res.render('postForm');
})

// export the app
module.exports = app;