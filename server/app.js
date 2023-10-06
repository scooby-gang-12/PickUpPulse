require('dotenv').config();

const express = require('express');
const path = require('path');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');



const app = express();
const authRoutes = require('./routes/auth-routes');
const gameRoutes = require('./routes/game-routes');

// Middleware
app.use(morgan('tiny'))
app.use(express.json())

app.use(
  session({
    secret: 'hello',
    resave: false,
    saveUninitialized: true,
  }),
);

// Passport Initialization
app.use(passport.initialize());
app.use(passport.session());

// Passport Configuration
require('../server/passport/passport-config.js')(passport);

// Server Static Build
app.use('/build', express.static(path.join(__dirname, '../build')));

// Serve React App
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
});

// Routes for Auth
app.use('/api/auth', authRoutes)


// Routes for Games
app.use('/api/games', gameRoutes);

// Catch All Route
app.use('*', (req,res) => {
  return res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
})

// Global Error Handler
app.use((err, req, res, next) => {
  const { statusCode = 500, message = 'Internal Server Error', stack = '', details = {} } = err;

  console.error(`[Error] ${message}`, err);

  const isDevelopment = process.env.NODE_ENV === 'development';

  res.status(statusCode).json({
    status: 'error',
    message,
    stack: isDevelopment ? stack : undefined,
    details: isDevelopment ? details : undefined
  });
});


module.exports = app;
