const express = require('express');
var app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));

const cors = require('cors');

const categories = require('./routes/category');
const articles = require('./routes/article');

require('custom-env').env(process.env.NODE_ENV, './config');

const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTION_STRING, { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

app.use(cors());
app.use(express.json());
app.use('/categories', categories);
app.use('/articles', articles);

app.listen(process.env.PORT);