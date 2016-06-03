var express = require('express');
var router = express.Router();
var Garden = require("../models/garden.js");

router.route('/')
  .get(function(req, res){
    Default.find(function(err, defaults){
        if(err){console.log(err);}
        res.send(defaults);
    });
  })

  .post(function(req, res){
    console.log("Submitted this garden size: ", req.body);
    var newGarden = new Garden({
          rowsNtoS: req.body.rowsNtoS,
          rowsEtoW: req.body.rowsEtoW
    });
    Garden.create(newGarden, function(err, post){
      if(err){
        console.log(err);
      }
      res.send("Garden posted: ", post);
    });


    });


    // router.route('/delete/:id').put(function(req, res){
    //   console.log(req.body);
    //
    //     Garden.findOneAndUpdate({_id: req.body._id}, {
    //       status: "Deleted"
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
    //     Garden.findOneAndUpdate({_id: req.body._id}, {
    //       status: "Not Contacted"
    //     }, function(err, doc){
    //       if(err){
    //         console.log(err);
    //       }
    //       res.json();
    //     });
    // });

module.exports = router;
