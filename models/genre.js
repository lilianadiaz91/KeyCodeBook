const mongoose = require('mongoose')
const genreSchema = new mongoose.Schema({
    name: {type: String, required: true},
    status: {type: Boolean, required: true},
    // campos boolean 1 = false y 0 = true

})
module.exports = mongoose.model('Genre', genreSchema)