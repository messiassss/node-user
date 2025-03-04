let express = require('express');
let routes = express.Router();

routes.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
        user: [{
            name: 'Messias',
            email: '123'
        }]
    })
})


routes.get('/admin', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({
        user: []
    })
})


module.exports = routes;