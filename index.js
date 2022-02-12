
const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const config = require('./config/index');
const defaultRouter=require('./routes/defaultRouter');
const productRouter=require('./routes/productRouter')
const app = express();
const port = 3000;

app.listen(port, ()=>{
    console.log(`Server is running on port' ${port}`);
});

app.use(bodyParser.json());

mongoose.connect(config.dbConStr)
.then(res => ('Connected to Mongo DB'))
.catch(err => ('Failed to connect to DB'))

app.use('/',defaultRouter);
app.use('/api/products', productRouter);


