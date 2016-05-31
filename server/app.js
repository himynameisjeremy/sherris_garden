
// INITIAL VARS
var express = require('express');
var app = express();
//var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// MODELS
var plantModel = require('./models/plant.js');

// ROUTES
var index = require('./routes/index.js');
var plant = require('./routes/plant.js');

// DATABASE VARS
var mongoURI =    process.env.MONGODB_URI ||
   process.env.MONGOHQ_URL ||
   "mongodb://localhost/plantdb";
var mongoDB = mongoose.connect(mongoURI).connection;

    // DATABASE SETUP
    mongoDB.on('error', function(err){
        console.log('Mongo connection: ', err);
    });
    mongoDB.once('open', function(err){
        if(!err) {console.log('Mongo connection open');}
        else if(err) {console.log('There was an error opening Mongo connection: ', err);}
    });
/************* THIS CODE DOES THE ACTUAL DB CHECK FOR EXISTING COLLECTIONS *****************/
//     var conn = mongoose.createConnection(mongoURI);
//     conn.on('open', function(){
//     conn.db.listCollections().toArray(function(err, names){
//         if(names.length==0){
//             console.log("Nothing Planted");
//         }else{
//             console.log("Things are planted");
//         }
//         conn.close();
//     });
// });
// /*******************************************************************************************/

// SET PORT
app.set('port', (process.env.PORT) || 5000);

// SET MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// CALL CATCHES
app.get('/checkDB', function(req, res){
    console.log('defaultsExist =', defaultsExist);
    res.send(defaultsExist);
});
app.use('/plant', plant);
app.use('/', index);

// LISTENER
app.listen(app.get('port'), function(){
    console.log('Listening on port #', app.get('port'));
});

module.export = app;
