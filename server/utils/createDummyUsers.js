const mongoose = require('mongoose');

const User = require('../models/userModel')
const MONGO_URI = 'mongodb+srv://just-bobby:Domino17%21@cluster0.tkib1.mongodb.net/sports?authSource=admin&replicaSet=atlas-mk1h99-shard-0&'
mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to DB 🤟'))
  .catch((err) => console.log(err))

  const dummyUsers = [
    {
      _id: new mongoose.Types.ObjectId('60d5ec9af682fbd39c2d17af'),
      username: 'johnDoe',
      password: 'password123',
      fullName: 'John Doe',
      favoriteSports: ['basketball', 'golf'],
      location: {
        type: 'Point',
        coordinates: [-118.2437, 34.0522]
      },
      attendingGames: [],
      hostedGames: []
    },
    {
      _id: new mongoose.Types.ObjectId('60d5ec9af682fbd39c2d17b0'),
      username: 'janeSmith',
      password: 'password456',
      fullName: 'Jane Smith',
      favoriteSports: ['golf'],
      location: {
        type: 'Point',
        coordinates: [-118.2637, 34.0722]
      },
      attendingGames: [],
      hostedGames: []
    },
    {
      _id: new mongoose.Types.ObjectId('60d5ec9af682fbd39c2d17b1'),
      username: 'robertBrown',
      password: 'password789',
      fullName: 'Robert Brown',
      favoriteSports: ['basketball'],
      location: {
        type: 'Point',
        coordinates: [-118.2237, 34.0322]
      },
      attendingGames: [],
      hostedGames: []
    },
    {
      _id: new mongoose.Types.ObjectId('60d5ec9af682fbd39c2d17b2'),
      username: 'lucyGreen',
      password: 'password101',
      fullName: 'Lucy Green',
      favoriteSports: ['golf'],
      location: {
        type: 'Point',
        coordinates: [-118.2330, 34.0625]
      },
      attendingGames: [],
      hostedGames: []
    },
    {
      _id: new mongoose.Types.ObjectId('60d5ec9af682fbd39c2d17b3'),
      username: 'michaelWhite',
      password: 'password202',
      fullName: 'Michael White',
      favoriteSports: ['basketball'],
      location: {
        type: 'Point',
        coordinates: [-118.2530, 34.0425]
      },
      attendingGames: [],
      hostedGames: []
    },
    {
      _id: new mongoose.Types.ObjectId('60d5ec9af682fbd39c2d17b4'),
      username: 'susanGray',
      password: 'password303',
      fullName: 'Susan Gray',
      favoriteSports: ['golf', 'basketball'],
      location: {
        type: 'Point',
        coordinates: [-118.2130, 34.0525]
      },
      attendingGames: [],
      hostedGames: []
    },
    {
      _id: new mongoose.Types.ObjectId('60d5ec9af682fbd39c2d17b5'),
      username: 'davidBlack',
      password: 'password404',
      fullName: 'David Black',
      favoriteSports: ['golf'],
      location: {
        type: 'Point',
        coordinates: [-118.2430, 34.0620]
      },
      attendingGames: [],
      hostedGames: []
    },
    {
      _id: new mongoose.Types.ObjectId('60d5ec9af682fbd39c2d17b6'),
      username: 'annaBlue',
      password: 'password505',
      fullName: 'Anna Blue',
      favoriteSports: ['basketball'],
      location: {
        type: 'Point',
        coordinates: [-118.2535, 34.0520]
      },
      attendingGames: [],
      hostedGames: []
    },
    {
      _id: new mongoose.Types.ObjectId('60d5ec9af682fbd39c2d17b7'),
      username: 'paulRed',
      password: 'password606',
      fullName: 'Paul Red',
      favoriteSports: ['golf', 'basketball'],
      location: {
        type: 'Point',
        coordinates: [-118.2335, 34.0420]
      },
      attendingGames: [],
      hostedGames: []
    },
    {
      _id: new mongoose.Types.ObjectId('60d5ec9af682fbd39c2d17b8'),
      username: 'lindaYellow',
      password: 'password707',
      fullName: 'Linda Yellow',
      favoriteSports: ['basketball'],
      location: {
        type: 'Point',
        coordinates: [-118.2235, 34.0720]
      },
      attendingGames: [],
      hostedGames: []
    }
  ];
  
const createUsers = async (users) => {
  for (const user of users) {
    const newUser = new User(user)
    await newUser.save()
  }
}
createUsers(dummyUsers)