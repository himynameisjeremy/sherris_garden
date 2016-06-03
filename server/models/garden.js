var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Garden = new Schema({
    rowsNtoS: { type: String, required: true},
    rowsEtoW: { type: String, required: true}
});

module.exports = mongoose.model("Garden", Garden);
