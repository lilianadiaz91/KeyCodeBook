const UserModel = require('../models/user')

//metodo para crear usuario
exports.create = (req, res) => {
    //el signo de admiracion significa q estamos negando la condicion
    //object.entries sirve para validar campos vacios

    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Los datos son obligatorios'
        })
    }
    const user = new UserModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        birthDate: req.body.birthDate,
        age: req.body.age
    })
    user.save()
        .then((dataUser) => { res.send(dataUser) })
        .catch((error) => {
            res.status(500).send({
                message: error.message
            })
        })
}
//metodo para actualizar usuario
exports.update = (req, res) => {
    //validamos q todos los campos no esten vacios
    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Los datos son obligatorios'
        })
    }
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        birthDate: req.body.birthDate,
        age: req.body.age
    }
    //findByIdAndUpdate = metodo de mongoose q permite buscar por id y actualizar
    //params es el id q se envia por la url
    // user = constante creada anteriormente para datos nuevos
    UserModel.findByIdAndUpdate(req.params.id, user)
    .then(
        (userUpdate) =>{res.send(userUpdate)}
    )
    .catch(
        (error) =>{
            res.status(500).send({
                message: error.message
            })
        }
    )

}