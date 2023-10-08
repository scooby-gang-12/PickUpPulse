const Game = require('../models/gameModel');
const User = require('../models/userModel');

const gameController = {};

// Create Game Controller
gameController.createGame = async (req, res, next) => {
    const { gameName, sport, location, address, partySize, dateTime } = req.body;
    console.log(req.user)
    const newGame = await Game.create({
        
        gameName: gameName,
        sport: sport,
        location: location,
        address: address,
        partySize: partySize,
        dateTime: dateTime,
        attending: [req.user.id],
        host: req.user.id
    })
        .then((game) => {
            if(!game) return next({message: 'Issue creating Game'});
            res.locals.game = {
                host: req.user.id,
                gameId: game._id
            };
        })
        .catch((err) => next(err));

    res.locals.gameArr = await Game.find().catch((err) => next(err));


    return next();
}

// Get all games created
gameController.getAllGames = async (req, res, next) => {
    res.locals.gameArr = await Game.find().catch((err) => next(err));
    return next();
}



// Update specific game and return array of games
gameController.updateGame = async (req, res, next) => {
    const { gameId, gameName, location, address, sports, partySize } = req.body;
    await Game.findByIdAndUpdate(gameId, { gameName: gameName, location: location, address: address, sports: sports, partySize: partySize })
        .catch((err) => next(err));
    
    res.locals.gameArr = await Game.find().catch((err) => next(err));
    return next();
}

// Delete specific game and return array of games
gameController.deleteGame = async (req, res, next) => {
    // BOBBY Switch to params
    const { gameId } = req.params;
    
    await Game.findByIdAndDelete(gameId).catch((err) => next(err));

    res.locals.gameArr = await Game.find().catch((err) => next(err));
    return next();
}

// Sign up for game and adds it to attending array, Checks to see if user is the host, if so adds it to 'Hosted Games'
gameController.signupForGame = async (req, res, next) => {
    req.user.attendingGames.push(res.locals.game.gameId);
    if(req.user.id === res.locals.game.host) {
        req.user.hostedGames.push(res.locals.game.gameId)
    }
    await req.user.save();

    return next()
    
}

// Check to see if user trying to delete game is the Host of the Game
gameController.hostCheck = async (req, res, next) => {
    const { gameId } = req.params;
    const { user } = req;

    if(user.hostedGames.includes(gameId)) return next();

    return next({message: 'Only host may delete game'})
}


// Remove Deleted Game from Hosted array and Attending array
gameController.removeDeletedGame = async (req, res, next) => {
    const { gameId } = req.params;
    const { user } = req;

    const newHostArr = [];
    const newAttendArr = [];

    user.hostedGames.forEach((e) => {
        if(e != gameId) {
            newHostArr.push(e);
        }
    })

    user.attendingGames.forEach((e) => {
        if(e != gameId) {
            newAttendArr.push(e);
        }
    })

    user.hostedGames = newHostArr;
    user.attendingGames = newAttendArr;
    
    await user.save();
    return next()
}



module.exports = gameController;