const ObjectId = require('mongoose').Types.ObjectId;

const mongoose = require('mongoose')
const Game = require('../models/gameModel')
const User = require('../models/userModel')

const MONGO_URI = 'mongodb+srv://just-bobby:Domino17%21@cluster0.tkib1.mongodb.net/sports?authSource=admin&replicaSet=atlas-mk1h99-shard-0&'
mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to DB 🤟'))
  .catch((err) => console.log(err))

  const dummyGames = [
    {
      location: { type: 'Point', coordinates: [-118.1124, 34.0116] },
      gameName: 'Golf at Sunny Meadows',
      sport: 'golf',
      address: '123 Fairway Ave, Los Angeles, CA, USA',
      host: new mongoose.Types.ObjectId('60d5ec9af682fbd39c2d17af'),
      partySize: 4,
      dateTime: new Date('2023-12-10T09:30:00.000Z'),
      attending: [
        new mongoose.Types.ObjectId('60d5ec9af682fbd39c2d17af'),
        new mongoose.Types.ObjectId('60d5ec9af682fbd39c2d17b0')
      ],
    },
    {
      location: { type: 'Point', coordinates: [-118.1435, 34.0217] },
      gameName: 'Basketball at LA Court',
      sport: 'basketball',
      address: '456 Basketball St, Los Angeles, CA, USA',
      host: new mongoose.Types.ObjectId('60d5ec9af682fbd39c2d17b1'),
      partySize: 10,
      dateTime: new Date('2023-12-12T16:30:00.000Z'),
      attending: [
        new mongoose.Types.ObjectId('60d5ec9af682fbd39c2d17b1'),
        new mongoose.Types.ObjectId('60d5ec9af682fbd39c2d17b2'),
        new mongoose.Types.ObjectId('60d5ec9af682fbd39c2d17b3')
      ],
    },
    {
      location: { type: 'Point', coordinates: [-118.1535, 34.0317] },
      gameName: 'Downtown Basketball Shootout',
      sport: 'basketball',
      address: '789 Downtown Ct, Los Angeles, CA, USA',
      host: new mongoose.Types.ObjectId('60d5ec9af682fbd39c2d17b2'),
      partySize: 5,
      dateTime: new Date('2023-12-13T17:00:00.000Z'),
      attending: [
        new mongoose.Types.ObjectId('60d5ec9af682fbd39c2d17b2'),
        new mongoose.Types.ObjectId('60d5ec9af682fbd39c2d17b3')
      ],
    },
    {
      location: { type: 'Point', coordinates: [-118.1635, 34.0418] },
      gameName: 'Beachside Golf Fun',
      sport: 'golf',
      address: '101 Beach Rd, Los Angeles, CA, USA',
      host: new mongoose.Types.ObjectId('60d5ec9af682fbd39c2d17b3'),
      partySize: 3,
      dateTime: new Date('2023-12-14T10:00:00.000Z'),
      attending: [
        new mongoose.Types.ObjectId('60d5ec9af682fbd39c2d17b3')
      ],
    },
    {
      location: { type: 'Point', coordinates: [-118.1735, 34.0519] },
      gameName: 'Late Night Basketball Challenge',
      sport: 'basketball',
      address: '202 Midnight Ct, Los Angeles, CA, USA',
      host: new mongoose.Types.ObjectId('60d5ec9af682fbd39c2d17b4'),
      partySize: 8,
      dateTime: new Date('2023-12-15T20:00:00.000Z'),
      attending: [
        new mongoose.Types.ObjectId('60d5ec9af682fbd39c2d17b4'),
        new mongoose.Types.ObjectId('60d5ec9af682fbd39c2d17b5'),
        new mongoose.Types.ObjectId('60d5ec9af682fbd39c2d17b6')
      ],
    },
    {
      location: { type: 'Point', coordinates: [-118.1835, 34.0619] },
      gameName: 'Weekend Golf with Friends',
      sport: 'golf',
      address: '303 Weekend Dr, Los Angeles, CA, USA',
      host: new mongoose.Types.ObjectId('60d5ec9af682fbd39c2d17b5'),
      partySize: 4,
      dateTime: new Date('2023-12-16T11:00:00.000Z'),
      attending: [
        new mongoose.Types.ObjectId('60d5ec9af682fbd39c2d17b5')
      ],
    },
    {
      location: { type: 'Point', coordinates: [-118.1935, 34.0719] },
      gameName: 'Street Basketball Battle',
      sport: 'basketball',
      address: '404 Street Ave, Los Angeles, CA, USA',
      host: new mongoose.Types.ObjectId('60d5ec9af682fbd39c2d17b6'),
      partySize: 6,
      dateTime: new Date('2023-12-17T16:30:00.000Z'),
      attending: [
        new mongoose.Types.ObjectId('60d5ec9af682fbd39c2d17b6'),
        new mongoose.Types.ObjectId('60d5ec9af682fbd39c2d17b7')
      ],
    },
    {
      location: { type: 'Point', coordinates: [-118.2035, 34.0819] },
      gameName: 'Morning Golf Session',
      sport: 'golf',
      address: '505 Morning Pl, Los Angeles, CA, USA',
      host: new mongoose.Types.ObjectId('60d5ec9af682fbd39c2d17b7'),
      partySize: 3,
      dateTime: new Date('2023-12-18T09:00:00.000Z'),
      attending: [
        new mongoose.Types.ObjectId('60d5ec9af682fbd39c2d17b7')
      ],
    },
    {
      location: { type: 'Point', coordinates: [-118.2135, 34.0919] },
      gameName: 'Basketball Championship',
      sport: 'basketball',
      address: '606 Championship Blvd, Los Angeles, CA, USA',
      host: new mongoose.Types.ObjectId('60d5ec9af682fbd39c2d17b8'),
      partySize: 10,
      dateTime: new Date('2023-12-19T18:00:00.000Z'),
      attending: [
        new mongoose.Types.ObjectId('60d5ec9af682fbd39c2d17b8'),
        new mongoose.Types.ObjectId('60d5ec9af682fbd39c2d17b1'),
        new mongoose.Types.ObjectId('60d5ec9af682fbd39c2d17b2')
      ],
    },
    {
      location: { type: 'Point', coordinates: [-118.2235, 34.1019] },
      gameName: 'Golf Pros Meetup',
      sport: 'golf',
      address: '707 Pros Rd, Los Angeles, CA, USA',
      host: new mongoose.Types.ObjectId('60d5ec9af682fbd39c2d17af'),
      partySize: 4,
      dateTime: new Date('2023-12-20T10:30:00.000Z'),
      attending: [
        new mongoose.Types.ObjectId('60d5ec9af682fbd39c2d17af'),
        new mongoose.Types.ObjectId('60d5ec9af682fbd39c2d17b0')
      ],
    },
    
  ];

const createGames = async (games) => {
  for (const game of games) {
    const newGame = new Game(game)
    const hostUser = await User.findById(newGame.host)
    hostUser.hostedGames.push(newGame._id)
    await hostUser.save()
    for (const attending of newGame.attending) {
      const attendingUser = await User.findById(attending._id)  
      attendingUser.attendingGames.push(newGame._id)
      await attendingUser.save()
    }
    await newGame.save()
  }
}

createGames(dummyGames)