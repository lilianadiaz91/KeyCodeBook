const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    name: {type: String, required: true},
    author: {type:String, required: true },
    pageNumber: {type: String, required: true},
    publisher: {type: String, required: true},
    publicationDate: {type: Date},
    //genre:[{type: mongoose.Schema.Types.ObjectId, ref: 'Genre'} un libro tiene un solo genero
    genre:[{type: mongoose.Schema.Types.ObjectId, ref: 'Genre'}] // un libro puede tener muchos generos

})

module.exports = mongoose.model('Book', bookSchema)