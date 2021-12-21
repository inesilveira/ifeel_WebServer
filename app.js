var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//fiz isto
var AccountRouter = require('./routes/Account');



var PromptRouter = require('./routes/Prompt');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//fiz isto
app.use('/api/Account', AccountRouter);



app.use('/api/Prompt', PromptRouter);

module.exports = app;
