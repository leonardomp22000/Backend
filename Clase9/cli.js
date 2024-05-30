require('dotenv').config()
const mongoose = require('mongoose')

const {DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME

} = process.env
//protocolo://usuario:pasword

const MONG_URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority&appName=javaScriptKodemia`
// modelo de datos representa la coleccion de base de datos
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

}))  // El nombre del model es en mayusculas, el nombre del modelo es el de la coleccion  

// Protoclos de comunicacion: 
// mongodb+srv//
// http://
// protocolo://usuario:pasword

mongoose.connect(
    MONG_URI
    //'mongodb+srv://leonardomp2200:248163264Lm@javascriptkodemia.6m1hpzc.mongodb.net/kodemia?retryWrites=true&w=majority&appName=javaScriptKodemia'
).then(()=>{
    console.log('Conexion exitosa')
    // Insertar datos 
    Koder.create({ // El metodo create del modelo es una promesa 
        firstName: "Leo", 
        lastName: "Meza",
        email:"leonardomp2200@gmail.com",
        birthDate: new Date("1999-12-31"),
        generation: 33
    }).then(() => {console.log('Koder created')})
    .catch((error) => {console.log("Error al crear Koder:", error ) })
}) 
.catch((error) =>{
    console.log('Error al conectar a la base de datos ', error)
})

// NO versionar en github ya que son credenciales

// Promises 
// Objetos que representan una ejecucion que puede que se cumplan o no 
/**
 * Promesas por defecto nacen o se crean en estado pendiente 
 * - resolve: Se resuelve la promesa (then())
 * - reejct: se rechaza la promesa (catch())
 */





