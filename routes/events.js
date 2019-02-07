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
         
         
       })
      })
      router.get('/dashboard/gamefilter', ensureAuthenticated,function(req,res){
        Events.find({},function(err,game){
          if(err) throw err
          
          res.render('gamefilter',{events:game})
          
          
        })
       })
   
  
module.exports = router;
