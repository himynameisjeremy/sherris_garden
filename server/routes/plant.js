var express = require('express');
var router = express.Router();
var Plant = require("../models/plant.js");

router.route('/')
  .get(function(req, res){
    Default.find(function(err, defaults){
        if(err){console.log(err);}
        res.send(defaults);
    });
  })

  .post(function(req, res){
    console.log("User submitted this plant info: ", req.body);
    var newPlant = new Plant({
          type: req.body.type,
          date_planted: req.body.date_planted,
          date_harvested: req.body.date_harvested,
          quality: req.body.quality,
          disease_resistant: req.body.disease_resistant,
          pest_resistant: req.body.pest_resistant,
          early_variety: req.body.early_variety,
          late_variety: req.body.late_variety,
          notes: req.body.notes
    });
    Plant.create(newPlant, function(err, post){
      if(err){
        console.log(err);
      }
      res.send("end of Plant.create", post);
    });


    });


    // router.route('/delete/:id').put(function(req, res){
    //   console.log(req.body);
    //
    //     Plant.findOneAndUpdate({_id: req.body._id}, {
    //       status: "Deleted"
    //     }, function(err, doc){
    //       if(err){
    //         console.log(err);
    //       }
    //       res.json();
    //     });
    // });

    // router.route('/statusChange/:id').put(function(req, res){
    //   console.log(req.body);
    //
    //     Plant.findOneAndUpdate({_id: req.body._id}, {
    //       status: "Contacted"
    //     }, function(err, doc){
    //       if(err){
    //         console.log(err);
    //       }
    //       res.json();
    //     });
    // });
    //
    // router.route('/statusChangeBack/:id').put(function(req, res){
    //   console.log(req.body);
    //
    //     Plant.findOneAndUpdate({_id: req.body._id}, {
    //       status: "Not Contacted"
    //     }, function(err, doc){
    //       if(err){
    //         console.log(err);
    //       }
    //       res.json();
    //     });
    // });

module.exports = router;
