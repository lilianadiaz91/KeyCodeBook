const mongoose = require('mongoose')// paquete q permite la cominucacion con la base de datos


const conectDB = () => {
    mongoose.connect('mongodb+srv://lilianadiaz91:Sharon2009@liliana.vvjuo.mongodb.net/KeyCodeBook?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true}, (error) =>{
        if(error){
            console.log('error: ', error)
        }else{
            console.log('Nos conectamos a la BD.')
        }
    })
}
// permite exportar una funcion para q pueda ser utilizada en otra parte de nuestro proyecto
module.exports = { conectDB }
