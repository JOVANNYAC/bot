'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();
 
app.set('port', 5000);
app.use(bodyParser.json());

app.get('/', function(req, response){
    response.send('hola care bola!');
})

app.get('/webhook', function(req, response){
    if(req.query['hub.verify_token'] === 'jovanny_token'){
        response.send(req.query['hub.challenge']);
    }else {
        response.send('Ahy caramba no tienes persimos!!!')
    }
})

app.listen(app.get('port'), function(){
    console.log('Nuetro servidor esra funcionando en el puerto', app.get('port'));
})