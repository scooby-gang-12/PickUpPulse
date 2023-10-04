require('dotenv').config();

const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

// Middleware
app.use(morgan('tiny'))
app.use(express.json())

// Server Static Build
app.use('/build', express.static(path.join(__dirname, '../build')));

// Serve React App
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});


// Catch All Route
app.use('*', (req,res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
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
