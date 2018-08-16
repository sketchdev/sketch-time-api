require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const wristrest = require('wristrest');
const cors = require('cors');
const validation = require('./validation.json')

const PORT = process.env.PORT || 3000;

const app = express();
app.set('trust proxy', 1); // trust first proxy
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(wristrest(validation));
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));