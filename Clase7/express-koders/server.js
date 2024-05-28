// La definicion de nuestro servidor
const express = require("express")
const kodersUsecase = require("./koders.usecase")
const mentorsUsecase = require("./mentors.usecase") 
// const app = express() Es lo mismo que la linea 4 
const server = express()

server.use(express.json())
server.get('/', (request, response) =>{
    response.json({
        message: 'Kodemia APIv1'
    })
})

// GET /koders -> Endpoint

server.get('/koders', (request, response) =>{
    try {
        const koders = kodersUsecase.getAll()
        response.json({
            message: 'All koders',
            data: {
                koders:koders,

            }
        })
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            error: error.message
        })
        
    }
})

server.post('/koders',(request, response) => {
    try {
        const newKoder = request.body
        const koders = kodersUsecase.add(newKoder)

        response.json({
            message: "koder added",
            data:{ koders},
        })
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            error: error.message
        })
        
    }
}) 


server.delete("/koders", (request, response) =>{
    try {
        const koders = kodersUsecase.deleteAll()
        response.json({
            message: "All koders deleted",
            data: { koders }
        })
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            error: error.message,
        })
        
    }
})


server.delete("/koders/:name", (request, response) =>{
    try {
        const name = request.params.name
        console.log(name)
        const koders = kodersUsecase.deleteByName(name)
        response.json({
            message: "Koder deleted",
            data: { koders },
        })
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            error: error.message,
        })
        
    }
})

//#region  Apartado de mentores
server.post('/mentores',(request, response) => {
    try {
        const newMentor = request.body
        const mentors = mentorsUsecase.add(newMentor)

        response.json({
            message: "Mentor added",
            data:{ mentors },
        })
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            error: error.message
        })
        
    }
}) 


server.delete("/mentores", (request, response) =>{
    try {
        const mentors = kodersUsecase.deleteAll()
        response.json({
            message: "All mentors deleted",
            data: { mentors }
        })
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            error: error.message,
        })
        
    }
})


server.delete("/mentores/:name", (request, response) =>{
    try {
        const name = request.params.name
        console.log(name)
        const mentors = mentorsUsecase.deleteByName(name)
        response.json({
            message: "mentor deleted",
            data: { mentors },
        })
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            error: error.message,
        })
        
    }
})

server.get('/mentores', (request, response) =>{
    try {
        const mentors = kodersUsecase.getAll()
        response.json({
            message: 'All mentors',
            data: {
                mentores : mentors,

            }
        })
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            error: error.message
        })
        
    }
})


//#endregion

module.exports = server