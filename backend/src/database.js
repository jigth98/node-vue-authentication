const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/node-vue-auth', {
    
}, () => {
    console.log('Database successfully connected')
})
