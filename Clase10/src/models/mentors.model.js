// firstName, 
// lastName, 
// email, 
// birthdate, 
// password, 
// createdAt

const mongoose = require('mongoose')
const modelName = 'mentors'
const schema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true, 
        minLength: 2,
        maxLength: 100
    }, 
    lastName: {
        type: String,
        required: true, 
        minLength: 2, 
        maxLength: 100
    },  
    email: {
        type: String,
        required: true,
        match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/ 
    }, 
    birthDate: {
        type: Date,
        required: true,
    },
    password: {
        type: String, 
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model(modelName, schema)
