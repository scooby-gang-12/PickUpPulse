const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  gameName: {type: String, required: true},
  sport: {type: String, required: true},
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  address: {type: String, required: true},
  host: {type: Schema.Types.ObjectId, ref: 'User'},
  partySize: {type: Number, required: true},
  dateTime: Date,
  gameType: {type: String},
  skillLevel: {type: String},
  attending: [{type: Schema.Types.ObjectId, ref: 'User'}],
});

GameSchema.index({ location: '2dsphere'});

const Game = mongoose.model('Game', GameSchema);

module.exports = Game;