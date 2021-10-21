const User = require('../models/user')
const { getHashedPassword } = require('../utils/user')

async function createUser(userObject) {
    try {
        const hashedPassword = await getHashedPassword(userObject.password)
        const user = await User.create({
            username: userObject.username,
            password: hashedPassword,
        })
        return user
    } catch (e) {
        console.error(e)
        throw e
    } 
}

async function updateUser(id, userObject) {
    try {
        const user = await User.findOneAndUpdate({ _id: id  }, {
            username: userObject.username
        })
        return user
    } catch (e) {
        console.error(e)
    } 
}

async function deleteUser(id) {
    try {
        const user = await User.findOneAndDelete({ _id: id  })
        return user
    } catch (e) {
        console.error(e)
    } 
}


module.exports = {
    createUser,
    updateUser,
    deleteUser,
}
