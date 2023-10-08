const router = require('express').Router();
const passport = require('passport');
const gameController = require('../controllers/gameController');

//Verify if we need to add passport authenticate for each route

// Create Game route
router.post('/', gameController.createGame, gameController.signupForGame, (req, res) => {
    return res.status(200).json(res.locals.gameArr)
});

// Get All Games route
router.get('/', gameController.getAllGames, (req, res) => {
    return res.status(200).json(res.locals.gameArr);
});

// Update Game route
router.patch('/', gameController.updateGame, (req, res) => {
    return res.status(200).json(res.locals.gameArr);
});

// Delete Game route
// Bobby :/gameId
router.delete('/:gameId', gameController.deleteGame, (req, res) => {
    return res.status(200).json(res.locals.gameArr);
})


module.exports = router;