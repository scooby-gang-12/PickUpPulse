const mongoose = require('mongoose')
const Game = require('../models/gameModel')
const User = require('../models/userModel')
const MONGO_URI = 'mongodb+srv://michaelmannw:hvcJ4G92GEiEyGQ2@pickuppulse.480cqps.mongodb.net/'
mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to DB 🤟'))
  .catch((err) => console.log(err))


const getAllUsers = async () => {
  const users = await User.find()
  const idParser = []
  for (const user of users) {
    let { id, username } = user;
    idParser.push({id: id, username: username})    
  }
  console.log(idParser)
}


getAllUsers()