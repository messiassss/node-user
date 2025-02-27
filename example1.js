

//using http module
const http = require('http');

let server = http.createServer((req,res)=>{
    console.log('URL: ',req.url);
    console.log('URL: ',req.method);

    switch(req.url){
        case '/':
        res.setHeader('Content-Type','text/html')
        res.end('<h1>Olá</h1');

        case '/users':
            res.statusCode = 200;
            res.setHeader('Content-Type','application/json');
            res.end(JSON.stringify({
                user:[{
                    name:'Messias',
                    email: '123'
                }]
                })
            )
            break;


            default:
            res.end('OK');
        }



    
});

server.listen(3000,'127.0.0.1',()=>{
    console.log('Servidor Rodando')
})