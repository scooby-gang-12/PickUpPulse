const router = require('express').Router();
const passport = require('passport');
const userController = require('../controllers/userControllers');


router.get('/idParser', userController.idParser, (req, res) => {
    return res.status(200).json(res.locals.idParser)
})


// Update User information
// router.patch('/', userController.updateUser, (req, res) => {
//     return res.status(200).json(res.locals.updatedUser);
// })

// router.get('/', userController.findUserGames)

module.exports = router;