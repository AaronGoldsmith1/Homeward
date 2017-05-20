const schedule = require('node-schedule');
const chronJobController = {};
const User = require('./../user/userController');

chronJobController.scheduleJob = function () {
    schedule.scheduleJob('0 * * * *', function(){
        User.find({}, (err, users) => {
            if (err) console.log(err);
            else{
                for (user in users) {
                    for (query in user.queries){
                        
                    }
                }
            }
        });
    });
}



module.exports = chronJobController;