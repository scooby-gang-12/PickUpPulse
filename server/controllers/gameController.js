const Game = require('../models/gameModel');

const gameController = {};

// Create Game Controller
gameController.createGame = async (req, res, next) => {
    const { gameType, location, partySize } = req.body;

    await Game.create({ gameType: gameType, gameLocation: location, partySize: partySize })
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

// Update the value of a specific game and return array of games
gameController.updateGame = async (req, res, next) => {
    const { gameId, newLocation } = req.body;
    await Game.findByIdAndUpdate(gameId, { gameLocation: newLocation })
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