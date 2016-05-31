var express = require("express");
var router = express.Router();
var path = require("path");

//catch-all
router.get("/*", function(req,res,next){
  // console.log(req.params[0]);
  var file = req.params[0] || "/views/index.html";
  res.sendFile(path.join(__dirname, "../public", file));
});

module.exports = router;
