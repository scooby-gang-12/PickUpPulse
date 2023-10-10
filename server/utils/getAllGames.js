
const mongoose = require('mongoose')
const Game = require('../models/gameModel')
const User = require('../models/userModel')
const MONGO_URI = 'mongodb+srv://just-bobby:Domino17%21@cluster0.tkib1.mongodb.net/sports?authSource=admin&replicaSet=atlas-mk1h99-shard-0&'
mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to DB 🤟'))
  .catch((err) => console.log(err))

const getAllGames = async () => {
  const games = await Game.find().populate('host').populate('attending')
  for (const game of games) {
    console.log('GameName', game.gameName)
    console.log('Host', game.host.fullName)
    for (const attending of game.attending) {
      console.log('Attending', attending.fullName)
    }
    console.log('__________')
  }
}

getAllGames()