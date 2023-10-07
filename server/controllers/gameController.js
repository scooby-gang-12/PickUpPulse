const Game = require('../models/gameModel');

const gameController = {};

// Create Game Controller
gameController.createGame = async (req, res, next) => {
    const { gameName, sport, location, address, partySize, dateTime } = req.body;

    await Game.create({
        
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
            if(!game) return next({message: 'Issue creating Game'})
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
    const { gameId } = req.body;

    await Game.findByIdAndDelete(gameId).catch((err) => next(err));

    res.locals.gameArr = await Game.find().catch((err) => next(err));
    return next();
}

module.exports = gameController;