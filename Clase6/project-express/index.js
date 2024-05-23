const express = require('express') // Se importa express
const server = express() 
const koders = [
    {
        name: 'Omar', 
        generacion: 33
    }, 
    {
        name: 'Hugo', 
        generacion: 33
    }, 
    {
        name: "Fer", 
        generacion: 33
    }
]

// Habilita nuestro server para poder peticiones en el formato json
server.use(express.json())

server.get('/', (request, response) => {
    console.log('GET root')
    response.writeHead(200, {
        'Content-Type': 'text/plain',
        'yo-soy': 'Leonardo'
    })
    response.end('Hola mundo')
})

server.post("/koders", (request, response) => {
    console.log('body: ', request.body)
    const newKoderName = request.body.name
    const newKoderGeneration = request.body.generacion

    const newKoder = {
        name:  newKoderName,
        generacion: newKoderGeneration

    }
    koders.push(newKoder)
    response.json(koders)
})

server.get('/koders', (request, response) =>{
//     response.writeHead(200, {
//         'Content-Type': 'aplication/json',
//     })
//     response.end(JSON.stringify(koders)) // response es lo que el servidor responde al cliente
//                                          // console.log se mandan mensajes unicamente al servidor
// 
response.status(500)
response.json(koders)


})
server.listen(8080, () => {
    console.log('Server ready')
})