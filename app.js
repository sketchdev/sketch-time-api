require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const wrestler = require('wrestler');
const cors = require('cors');
const config = require('./wrestler-config.json');

const PORT = process.env.PORT || 5000;

const app = express();
app.set('trust proxy', 1); // trust first proxy
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(wrestler(config));
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));