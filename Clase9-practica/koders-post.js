require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const server = express()
server.use(express.json())
const port = 8080
const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME

} = process.env

const MONG_URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority&appName=javaScriptKodemia`

const Koder = mongoose.model('koder', new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 100,
    },
    lastName: {
        type: String,
        required: false,
        maxLength: 100,
    },
    email:{
        type: String,
        required: true,
        match:  /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    },
    birthDate:{
        type: Date,
        required: false
     },
    generation: {
        type: Number, 
        min: 1, 
        max: 100,
    }

})) 



server.post('/koders', (request, response) =>{ 
/*
PETICION FUNCIONAL
    console.log(request.body.name)
    console.log(typeof(request.body.name))
    response.json({
        message: "Termino la instruccion"
    })

*/
    mongoose.connect(MONG_URI).then(()=>{
        console.log('Conexion exitosa')

        const name = request.body.name
        const lastName = request.body.lastName
        const email = request.body.email
        const birthDate = request.body.birthDate
        const generation = request.body.generation
        Koder.create({
            firstName:  name,
            lastName: lastName,
            email: email,
            birthDate: birthDate,
            generation: generation
        }).then(()=>{
            console.log("Koder created")
            response.json({
                message: "koder añadido",
            })
        })
        .catch((error) => {
            console.log('Error al crear koder: ', error)
        })
    })
    .catch(()=>{
        console.log('Fallo la conexion con la base de datos')
    })
    
})

server.listen(port, () => {
    console.log(`Server is running ar http://localhost:${port}`)
})


