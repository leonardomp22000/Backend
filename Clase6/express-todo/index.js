// Tips importantes
// Poner en package.json los siguientes commandos para desarrollador y produccion
// "start": "node index.js",
// "dev": "node --watch index.js"
// para iniciarlo en la consola es npm run dev o npm run start
// Para iniciar un proyecto en node es npm -y 
// para descargar express es npm install express
// Las dos lineas anteriores dentro de la carpeta del proyecto

const express = require('express')
const server = express()
server.use(express.json())

const todos = []

// Listar los todos
server.get('/todos', (request, response) => {
    response.json({
        message: "all todos", 
        todos: todos
    })
})

// Agregar un todo
server.post('/todos', (request, response) => {
    const newTodo = request.body.todo

if (!newTodo){
    response.status(400)
    response.json({
        message: "todo is required",
        
    })
    return
}
    todos.push(newTodo)

    response.json({
        message: "new todo added", 
        todos: todos
    })

})

//Eliminar un todo

server.delete('/todos/:idx', (request, response) => {
    const indexToDelete = request.params.idx
    const indexAsInteger = parseInt(indexToDelete)

    if(isNaN(indexAsInteger)){
        response.status(400)
        response.json({
            message: 'invalid index, must be a number',
        })
        return
    }
    if(indexAsInteger < 0 || indexAsInteger >= todos.length){
        response.status(400)
        response.json({
            message: "invalid index, out of bound",
        })
        return
    }
    todos.splice(indexAsInteger, 1)
    response.json({
        message: 'todo deleted succesfully',
        todos: todos,
    })
})

server.listen(8081, () => {
    console.log('Server running on port 8081')
})