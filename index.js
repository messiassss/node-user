//using express module
const express = require('express');
let routesIndex = require('./routes/index');
let routesUers = require('./routes/users');

let app = express();
app.use(routesIndex);
//if you wish to set a standard path of the route, add as param on use() method, before route module
app.use('users',routesUers);

app.listen(3000,'127.0.0.1',()=>{
    console.log('Servidor Rodando')
})