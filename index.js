const express = require('express')//estamos utilizando express en nuestro proyecto

const cors = require('cors')

const bodyParser = require('body-parser')

const {conectDB} = require('./db')

const app = express() // se convierte a la const express en un objeto con el cual podemos trabajar

app.use(cors())
app.use(bodyParser.json())
conectDB()// estamos ejecutando el modulo de nuestra cnexion a la BD

require('./routes/user')(app)

app.listen(3000, () =>{
    console.log(`se levanto el servidor`)
})