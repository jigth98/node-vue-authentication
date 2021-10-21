const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

async function getUserObject(username) {
    try {
        const user = await User.findOne({
            username
        })

        return {
            id: user._id,
            username,
            password: user.password,
        }
    } catch (e) {
        console.error(e)
    }
}

async function getHashedPassword(password) {
    try {
        const salt = await bcrypt.genSalt(13)
        const hashedPassword = await bcrypt.hash(password, salt)
        return hashedPassword
    } catch (e) {
        console.error(e)
    }
}

function getJsonWebToken(userId) {
    try {
        const token = jwt.sign({ _id: userId }, process.env.JWT_SECRET_KEY) 
        return token
    } catch (e) {
        console.error(e)
    }
}

async function compareUserPassword(username, password) {
    try {
        const user = await User.findOne({ username  })
        const passwordsMatch = await bcrypt.compare(password, user.password)
        return passwordsMatch
    } catch (e) {
        console.error(e)
    }
}

module.exports = {
    getUserObject,
    getHashedPassword,
    getJsonWebToken,
    compareUserPassword,
}
