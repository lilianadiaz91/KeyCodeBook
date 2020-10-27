const BookModel = require('../models/book')

// metodo para crear un libro
exports.create = (req, res) =>{
    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Los datos son obligatorios'
        })
    }
    const book = new BookModel({
    name: req.body.name,
    author: req.body.name,
    pageNumber: req.body.pageNumber,
    publisher: req.body.publisher,
    publicationDate: req.body.publicationDate,
    genre: req.body.genre

    })

    book.save()
        .then((dataBook)=>{
            res.send(dataBook)
        })
        .catch((error)=>{
            return res.status(500).send({
                message: error.message
            })
        })

}
// metodo para modificar un libro
exports.update = (req,res) =>{
    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Los datos son obligatorios'
        })
    }
    const book = {
    name: req.body.name,
    author: req.body.author,
    pageNumber: req.body.pageNumber,
    publisher: req.body.publisher,
    publicationDate: req.body.publicationDate,
    genre: req.body.genre
    }
    BookModel.findByIdAndUpdate(req.params.id, book, {new: true})
    .then((bookUpdate)=>{
        res.send(bookUpdate)
    })
    .catch((error)=>{
        return res.status(500).send({
            message: error.message
        })
    })
}
// metodo para listar todos los libros q estan en la plataforma
exports.getAll = (req, res) =>{
    BookModel.find()
        .populate('genre')//metodo q permite traer los datos de la coleecion con la q se tiene la relacion
        .exec() // se ejecuta la consulta
        .then( (book) =>{
            res.send(book)
        })
        .catch( (error) =>{
            res.status(500).send({
                message: error.message
            })
        })

}
// metodo para listar un libro por el id
exports.getOne = (req,res) =>{
    BookModel.findById(req.params.id)
    .populate('genre')
    .exec()
    .then( (book) => { res.send(book)})
    .catch( (error) => { res.status(500).send({message: error.message})})
}
// metodo para eliminar un libro
exports.deleteOne = (req,res) =>{
    BookModel.findByIdAndRemove(req.params.id)
    .then((book) =>{res.send(book)})
    .catch( (error) => {res.status(500).send({message: error.message})})
}