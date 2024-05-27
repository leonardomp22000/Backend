const server = require('./server')
const db = require('./db')
const port = 8081

db.init()



server.listen(port, () => {
    console.log(`Server is running ar http://localhost:${port}`)
})
// Index.js inicial el servidor
// Inidializar la base de datos

// Poner a escuchar el servidor 