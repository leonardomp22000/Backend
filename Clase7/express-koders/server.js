// La definicion de nuestro servidor
const express = require("express")
const kodersRouter = require ("./koders.router")
const mentorsRouter = require("./mentors.router")
const mentorsUsecase = require("./mentors.usecase") 
// const app = express() Es lo mismo que la linea 4 
const server = express()

server.use(express.json())

// MIddleware a nivel de aplicacion, ya que este afecta a todas las rutas que tiene el servidor 
server.use((request, response, next) => {


    console.log("Middleware de aplicacion ")
    const authorization = request.headers.authorization
    request.isAWizard = true
    if(authorization === 'contraseña'){
        next()
    }else{
        response.status(403)
        response.json({
            message: "no tienes acceso"
        })
    }

    
})

//Montar el router en el server  
server.use("/koders", kodersRouter)
server.use("/mentors", mentorsRouter)






server.get('/', (request, response) =>{
    response.json({
        message: 'Kodemia APIv1'
    })
})

// GET /koders -> Endpoint


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