const router = require('express').Router()
const userController = require('../controllers/user')
const User = require('../models/user')

router.get('/', (req, res) => {
    res.send('<h1>Welcome to the Auth backend project</h1>')
})

router.post('/signup', userController.createUser)

router.post('/login', userController.login)

router.post('/logout', userController.logout)

router.get('/home', userController.home)

router.get('/users', async (req, res) => {
    const users = await User.find({})
    res.send(users)
})
module.exports = router
