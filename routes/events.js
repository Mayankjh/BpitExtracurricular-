/* for filling  gamesdata 

var x = document.getElementsByName("game");
var gamenamearrays = [];

for(var i =0 ;i<x.length ; i++){
  gamenamearrays.push(x[i].value)
}

*/

const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');
// Load User model

const Events = require('../models/event');


// Register Page
router.get('/eventregister', (req, res) => res.render('events'));

// Register
router.post('/evregister', (req, res) => {
  const { name,gender, email,prog,course,section,year,phone,game,experience} = req.body;
        const newEvent = new Events({
          name,
          gender,
          email,
          prog,
          course,
          section,
          year,
          phone,
          game,
          experience
        })
        newEvent
              .save()
              .then(event => {
                req.flash(
                  'success_msg',
                  'You are now successfully registered'
                );
                res.redirect("eventsregister")
              })
      });


      router.get('/dashboardbuzz',function(req,res){
       Events.find({},function(err,event){
         if(err) throw err
         
         res.render('dashboard',{events:event})
        //  console.log(event)
         
       })
      })
      var gamenamearray = ["CarromBoysingle", "CarromBoysDouble", "ChessBoysingle", "ShotputBoys", "DiscussThrowBoys", "LongJumpBoys", "BadmintonBoysingle", "BadmintonBoysDouble", "Atheletics100mBoys", "Atheletics200mBoys", "TableTennisBoysingle", "TableTennisBoysDouble", "ArmWrestlingBoys5565", "ArmWrestlingBoys6575", "ArmWrestlingBoys75O", "FootballBoys", "BasketballBoys", "volleyballBoys", "TugOfWarBoys", "CricketBoys", "KabaddiBoys", "CarromGirlsSingle", "CarromGirlsDouble", "ChessGirlsSingle", "ShotputGirls", "DiscussThrowGirls", "LongJumpGirls", "BadmintonGirlsSingle", "BadmintonGirlsDouble", "Atheletics100mGirls", "Atheletics200mGirls", "TableTennisGirlsSingle", "TableTennisGirlssDouble", "ArmWrestlingGirls60B", "ArmWrestlingGirls6575", "ThrowBallGirls", "FootballBo", "BasketballGirls", "volleyballGirls", "TugOfWarGirls"]
   
      router.get('/dashboard/gamefilter',ensureAuthenticated,function(req,res){
        
        Events.find({},function(err,game){
          if(err) throw err
          
          res.render('gamefilter',{events:game, gamenames:gamenamearray,heading:"undefined"})
          
          
        })
       })

       
       
       router.get('/games',ensureAuthenticated,function(req,res){
       
        Events.find({game:{$in:[req.query.gamename]}},function(err,event){
          if(err) throw err
          
          res.render('gamefilter',{events:event, gamenames:gamenamearray,heading:req.query.gamename})
          // console.log(event)
          
        })
       })
   
  
module.exports = router;
