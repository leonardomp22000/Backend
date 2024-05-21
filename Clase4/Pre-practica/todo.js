// todo add 'limpiar mi cuarto'
// todo done 10 
// todo ls mostrar la lo de la lista 
// alv borrar todo 

// Necesitamos 
// - un archivo para guardar los todos (.json)
// - una funcion para cada comando
// - usar process.argv[] para leer los comandos 
// - usar fs para leer y escribir el archivo

const fs  = require('fs')
const dbFile = 'db.json'

const command = process.argv[2]


function init(){
    // Crear el archivo de base de datos 
   
    const fileExists = fs.existsSync(dbFile)
    if (!fileExists){
        fs.writeFileSync(dbFile, JSON.stringify({todos: []}))

    }
}
function getTodos(){
    // leer el archivo
    const content = fs.readFileSync(dbFile, 'utf-8')
    return JSON.parse(content).todos
}

function updateTodos(todos){
    const newTodos = { todos: todos }
    
    const newTodosAsString = JSON.stringify(newTodos)
    fs.writeFileSync(dbFile, newTodosAsString)
}

function add(task) {
    // Leer el archivo
    //agregar al archivo
    const todos = getTodos()
    todos.push(task)
    updateTodos(todos)
}

function done (taskIndex){
    // leer el archivo 
    // actualizar el archivo
    const todos = getTodos()
    todos.splice(taskIndex, 1)
    updateTodos(todos)

}
function ls (){
    // leer el archivo
    const todos = getTodos()
    if(!todos.length){
        console.log('[EMPTY]')
        process.exit()
    }
    todos.forEach((task, idx )=> {
        console.log(idx, "-", task)
    });

}

function alv(){
    // actualizar el archivo
    updateTodos([])

}





// const todos = getTodos()
// todos.push('nueva tarea')
// updateTodos(todos)

// borrar 
// updateTodos([])

function main() {
    const args = process.argv[3]
    init()
    if(command === 'ls'){
        ls()
    }else if (command === 'add'){
        if(!args){
            console.error('missing task')
            process.exit(1)
        }

        add(args)
        ls()
        console.log('Task added')
    }else if (command === 'done'){
        if (!args){
            console.error('missing task index')
            process.exit(1)
        }
        const idx = parseInt(args)
        if(isNaN(idx)){
            console.error('invalid index')
            process.exit(1)
        }
        const todos = getTodos()

        if (idx<0 || idx >= todos.length){
            console.error('invalid index')
            process.exit(1)
        }
        done(idx)
        ls()
        console.log('task completed')

    }else if (command === 'alv'){
        alv()
        console.log('Algo lindo vendra')
    }else{
        console.error('invalid command', command)
        process.exit(1)
    }
}

main()