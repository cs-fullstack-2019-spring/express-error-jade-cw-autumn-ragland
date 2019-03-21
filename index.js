//import express
const express = require('express');
const index = express();

//import routes
const routes = require('./routes/cwRoutes');

//make public directory available
index.use(express.static('public'));

//allow pug
index.set('view engine', 'pug');

//render routes
index.use('/', routes);

//404 message
index.use((request, response) =>{
    response.status(404).send('Error! This Page Cannot Be Found!')
});

//run on port 8000
index.listen(8000, () =>{
    console.log('port 8000')
});