const express = require('express');
const app = express();
var cors = require('cors');

const mailRouter = require('./routes/mailRoutes');
const payRouter = require('./routes/payRoutes');

app.use(cors());
app.use(express.json());

// Mounting Routes

app.use('/api/v1/mail', mailRouter);
app.use('/api/v1/pay', payRouter);
module.exports = app;
