const express = require('express');
 //we want express in our app so use this 
const mongoose = require('mongoose');


const bodyParser = require("body-parser");


const url = ('mongodb://localhost/Mukut2');
const app = express();  // to start express

app.use(bodyParser.urlencoded({ extended: true }));
//mongoose is software platform to connect databases with nodeJS running environment

mongoose.connect(url,{useNewUrlParser : true}) //connect app with database

const con = mongoose.connection  // you want that handel to connect

con.on('open', function() {
    console.log('connected...')
})

//create functions to accept or decline requests in server 
//so basically saying create routers
//Routing or router in web development is a mechanism where HTTP requests are routed to the code that handles them. To put simply, in the Router you determine what should happen when a user visits a certain page.

app.use(express.json())

app.use(
    express.urlencoded({ extended: true })
);
    
app.use(express.json());

const mukutRouter = require('./routers/router')
app.use('/router', mukutRouter)
app.listen('9000', ()=>{
    console.log('server connected');
})
