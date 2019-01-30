const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const Promise = require('bluebird');

const messageRoutes = require('./routes/message.route');

const config = require('./config/config');

const app = express();

mongoose.Promise = Promise;

const mongoHost = config.mongohost;
mongoose.connect(mongoHost, { useNewUrlParser: true });
mongoose.connection.on('error', () => {
    throw new Error('Error while establishing connection with mongodb server!');
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use('/messages', messageRoutes);

app.listen(config.port, () => {
    console.log('Service has started!');
});