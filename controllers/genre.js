const GenreModel = require('../models/genre')

// crear metodo para crear un genero
// req = a todo lo q estamos enviando
// res respuesta q devolverá
exports.create = (req, res) => {
    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Los datos son obligatorios'
        })
    }
    const genre = new GenreModel({
        name: req.body.name,
        status: req.body.status
    })
    // save = guarda
    genre.save()
        .then(
            (dataGener) => {
                res.send(dataGener)
            }
        ).catch(
            (error) => {
                return res.status(500).send({
                    message: error.message
                })
            }
        )
}
