//using express module
const express = require('express');
let app = express();

app.get('/',(req,res)=>{
    console.log('URL: ',req.url);
    console.log('URL: ',req.method);
    res.setHeader('Content-Type','text/html')
    res.end('<h1>Olá</h1');
})

app.get('/users',(req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','application/json');
    res.json({
        user:[{
            name:'Messias',
            email: '123'
        }]
        })  
})

app.listen(3000,'127.0.0.1',()=>{
    console.log('Servidor Rodando')
})