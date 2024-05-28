// Practica 7 
const express =  require('express')
const server = express()
const port = 8080
server.get('/', (request, response) =>{
    response.send('Hola Leo')

})

server.listen(port, () =>{
    console.log('Ejemplo de servidor en el puerto: ', port)
})