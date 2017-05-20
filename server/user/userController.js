const User = require('./userModel');
const client = require('twilio')('AC5d6dabce4797b65a544edc775b8858bb', 'c0a502a6ef22603ce2c3d5cc18dba45f');
const userController = {};

userController.createUser = (req, res)=>{
    User.create(req.body, (err, user)=>{
        if(err) throw new Error(err);
        res.status(200);
        return res.send(user);
    });
}


userController.createQuery = (req, res, next)=>{
    //req needs to pass user's phone number
  User.find({phone: req.body.phone}, (err, user)=>{
    if(err) throw new Error(err);
  }).update({$push:{queries:{key: req.body.queries}}}, (err, query)=>{
      //pushes new query into our queries array
    if(err) throw new Error(err);
    res.end();
}) 
next();
}

userController.verifyUser = (req, res, next) => {
  User.findOne({username: req.body.phone}, (err, result) => {
    if (err) throw err;
    else next()
  })
};

module.exports = userController;