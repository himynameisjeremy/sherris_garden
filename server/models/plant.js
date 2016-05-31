var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Plant = new Schema({
    type: { type: String, required: true},
    date_planted: { type: String, required: false},
    date_harvested: { type: String, required: false},
    plant_yield: { type: String, required: false},
    quality: { type: String, required: false},
    disease_resistant: { type: String, required: false},
    pest_resistant: { type: String, required: false},
    early_variety: { type: String, required: false},
    late_variety: { type: String, required: false},
    //early variety and late variety means development speed - wants to track if ready to harvest early/late - may change late_variety
    notes: { type: String, required: false}
});

module.exports = mongoose.model("Plant", Plant);
