const router = require('express').Router();
const passport = require('passport');
const userController = require('../controllers/userControllers');

// Update User information
router.patch('/updateUser', userController.updateUser, (req, res) => {
    return res.sendStatus(200);
})

// router.get('/', userController.findUserGames)

module.exports = router;