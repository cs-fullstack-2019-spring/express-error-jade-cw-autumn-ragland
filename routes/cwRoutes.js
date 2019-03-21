//import express and router
const express = require('express');
const router = express.Router();

//ex1 route with 2 placeholders
router.get('/exercise1/:placeholder1/:placeholder2', (request, response) => {
    response.render('ex1', {p1: request.params.placeholder1, p2: request.params.placeholder2})
});

//ex2 route with if statement
router.get('/exercise2/:placeholder/', (request, response) => {
    replace = '';
    if(0 >= request.params.placeholder)
        replace = 'Less Than One';
    else
        replace = 'Greater Than One';
    response.render('ex2', {placeholder: replace})
});

//ex3 simple route
router.get('/exercise3', (request,response) =>{
    response.render('ex3')
});

module.exports = router;