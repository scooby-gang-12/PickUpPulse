const mongoose = require('mongoose')
const Game = require('../models/gameModel')
const User = require('../models/userModel')
const MONGO_URI = 'mongodb+srv://just-bobby:Domino17%21@cluster0.tkib1.mongodb.net/sports?authSource=admin&replicaSet=atlas-mk1h99-shard-0&'
mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to DB 🤟'))
  .catch((err) => console.log(err))


const getAllUsers = async () => {
  const users = await User.find()
  for (const user of users) {
    const {attendingGames, hostedGames} = user
    console.log('Attending')
    console.log('---------')
    for (const game of attendingGames) {
      console.log(game.gameName)
    };
    console.log(' Hosted  ')
    console.log('---------')
    for (const game of hostedGames) {
      console.log(game.gameName)
    }
  }
}


getAllUsers()