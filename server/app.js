/**
 * MAIN SERVER APPLICATION FILE
 */
'use strict';

/* Setup server */
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const app = express();
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieSession = require('cookie-session');
const index = require('./routes/index');
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
  credentials: true,
}

/* Start Server */
// app.use(favicon(path.join(__dirname, '../TutorBot/src/assets/logo.png', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(cookieSession({
  name: 'session',
  keys: [process.env.KEY1, process.env.KEY2],
  httpOnly: false,
  maxAge: 24,
}));
app.use(express.static(path.join(__dirname, 'www')));
// app.set('port', process.env.PORT || 3000);
// app.listen(app.get('port'), function() {
//   console.log("listening to Port", app.get("port"));
// });

/* Redirect all to index */
app.use('/', index);

/* Catch all */
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../TutorBot/src', 'index.html'));
});

/* catch 404 and forward to error handler */
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/* error handler */
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
