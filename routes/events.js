const express = require('express');
const router = express.Router();
// Load User model

const Events = require('../models/Event');


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
  

      router.get('/dashboard',function(req,res){
       Events.find({},function(err,events){
         if(err) throw err;
         res.render('dashboard',{data:events})
         console.log(data);
       })
      })
module.exports = router;
