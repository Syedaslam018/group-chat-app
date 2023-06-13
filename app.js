const express = require('express')

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded());
const content = [];

const loginRoute = require('./login')
const messageRoutes = require('./message')

app.use(loginRoute);

app.use(messageRoutes);




    // console.log(req.body)


app.listen(4000);