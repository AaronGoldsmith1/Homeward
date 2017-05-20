const craigslist = require('node-craigslist');
const userController = require('./../user/userController');
const User = require('./../user/userModel')
const craigslistController = {};
let request = require('request')


craigslistController.getQueries= (req, res)=>{
    console.log('here')
    User.findOne({phone: "987"}, (err, user)=>{
        if(err) throw new Error(err);
        res.send(user.queries);
    })
} 
module.exports = craigslistController;

// let client = new craigslist.Client({
//     city : 'seattle'
//   });
// let options = {
//     category : 'apa',
//     maxAsk : '200',
//     minAsk : '100'
//   };
 
// client
//   .search(options, '2 bed')
//   .then((listings) => {
//     // filtered listings (by price) 
//     listings.forEach((listing) => console.log(listing));
//   })
//   .catch((err) => {
//     console.error(err);
//   });