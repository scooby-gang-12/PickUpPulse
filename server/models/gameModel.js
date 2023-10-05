const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  gameType: {type: String, required: true},
  host: {type: String},
  gameLocation: {type:String, required: true},
  dateTime: Date,
  partySize: {type: Number, required: true},
  attending: [String],
});

const Game = mongoose.model('game', GameSchema);

module.exports = Game;