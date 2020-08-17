const express = require('express');
const app = express();
var cors = require('cors');

const mailRouter = require('./routes/mailRoutes');

app.use(cors());
app.use(express.json());

// Mounting Routes

app.use('/api/v1/mail', mailRouter);
module.exports = app;
