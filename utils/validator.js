module.exports = {
        user:(app, req, res)=>{
            req.assert('_name', 'Field name is required ').notEmpty();
            req.assert('_email', 'Email is not valid').notEmpty().isEmail();
            req.assert('_password', 'Field password is required ').notEmpty();


            let errors = req.validationErrors();

            if(errors){
                app.utils.error.send(errors, req, res);
                return false;
            }

            return true;
            
        }
    }