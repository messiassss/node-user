let express = require('express');
let routes = express.Router();

routes.get('/',(req,res)=>{
    console.log('URL: ',req.url);
    console.log('URL: ',req.method);
    res.setHeader('Content-Type','text/html')
    res.end('<h1>Olá</h1');
})

module.exports = routes;