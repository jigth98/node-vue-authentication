const jwt = require('jsonwebtoken')
const { createUser, updateUser, deleteUser } = require('../repositories/user')
const { getUserObject, compareUserPassword, getJsonWebToken  } = require('../utils/user')
const User = require('../models/user')

const userController = {}

userController.login = async function(req, res) {
    const { username, password } = req.body
    try {
        const passwordsMatch = await compareUserPassword(username, password)
        if (passwordsMatch) {
            const { id } = await getUserObject(username)
            const jwt = getJsonWebToken(id)
            res.cookie('jwt', jwt, {
                httpOnly: true,
                maxAge: (60 * 60 * 24) * 1000,
            })
            res.json({ 'message': 'success', jwt })
        } else {
            res.json({ 'message': 'userOrPasswordIncorrect' })
        }
    } catch (e) {
        console.error(e)
    }
}

userController.logout = function (req, res) {
    try {
        // Unset the cookie
        res.cookie('jwt', '', {
            maxAge: 0
        })
        res.send({ 'message': 'success' })
    } catch (e) {
        console.error(e)
        res.send({ 'message': 'Error while logging out' })
    }
}

userController.createUser = async function(req, res) {
    try {
        const { username, password } = req.body
        const user = { username, password }
        const newUser = await createUser(user)
        
        res.send(newUser)
    } catch (e) {
        console.error(e)
        if(e.message.indexOf("11000") != -1) {
            res.send({
                error: 'Duplicated username, user could not be created'
            })
        } else {
            res.send({ error: 'There was an error while creating the user' })
        }
    } 
}

userController.home = async function(req, res) {
    try {
        const jwtCookie = req.cookies['jwt']
        const isAuthenticated = jwt.verify(jwtCookie, process.env.JWT_SECRET_KEY)

        if (!isAuthenticated) {
            res.status(401).send({ message: 'Unauthorized' })
        }

        res.send({ cookie: jwtCookie })
    } catch (e) {
        console.error(e)
        res.status(401).send({ message: 'Unauthorized' })
    } 
}

userController.updateUser = async function(req, res) {
    try {
        const { id, username } = req.params
        const user = await getUserObject(username)
        const updatedUser = await updateUser(id, user)
        res.send(updatedUser)
    } catch (e) {
        console.error(e)
    } 
}

userController.deleteUser = async function(req, res) {
    try {
        const { id  } = req.params
        const deletedUser = await deleteUser(id)
        res.send(deletedUser)
    } catch (e) {
        console.error(e)
    } 
}

module.exports = userController
