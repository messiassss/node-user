let NeDB = require('nedb');
let db = new NeDB({
    filename: 'users.db',
    autoload: true
})

module.exports = app => {

    //this app.route("path") works very similar with map of the spring boot
    let route = app.route('/users');
    route.get((req, res) => {
        //in the find , the first param, I can specify which object I want, 
        // if I pass an empty object, it becomes a getall
        db.find({}).sort({ name: 1 }).exec((err, users) => {
            if (err) {
                app.utils.error.send(err, req, res);
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({
                    users
                })
            }
        })


    })

    route.post((req, res) => {

        if(!app.utils.validator.user(app,req,res)) return false;

        db.insert(req.body, (err, user) => {
            if (err) {
                console.log(req.body)
                app.utils.error.send(err, req, res);
                
            } else {
                res.status(200).json(user);
            }
        });
    });


    let routeId = app.route('/users/:id')

    routeId.get((req, res) => {
        db.findOne({_id:req.params.id}).exec((err, user)=>{
            if(err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json(user);
            }
        })
    })



    routeId.put((req, res) => {

        if(!app.utils.validator.user(app,req,res)) return false;

        db.update({_id:req.params.id}, req.body, err =>{
            if(err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json(Object.assign({},req.params,req.body));
            }
        })
    })


    routeId.delete((req, res) => {
        db.remove({_id:req.params.id},{}, err =>{
            if(err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json(req.params);
            }
        })
    })
};