const http = require("http")

const server = http.createServer((request, response) =>{
    console.log('request: ', request)
    const method = request.method
    const url = request.url
    response.end(`${method}: ${url}`)
    if(url.startsWith('/koders')){
      console.log('leo')
    }






    // Cuando hay una peticion, esta va a ser la respuesta del servidor ¿
    // if(method === 'GET' && url == '/koders'){
    //     console.log('listado de koders')
    // }else if(method == 'POST' && )
})

server.listen(8080, () =>{
    console.log("El servidor esta escuchando en el puerto 8080")
}) // Una vez que el puerto esta preparado para recibir o enviar informacion se ejecuta la funcion 
// El puerto por defecto con http se usa el 80
// El puerto para el https es 443
// El puerto ssh es el 22
// Se puede cambiar el puerto por defecto 
// Rangos de puertos 
// Se pueden crear mas de un servidor en un script 

// const otroServer = http.createServer((request, response) => {
//     response.end('Hola desde otro server')
// })
// otroServer.listen(8081, () =>{
//     console.log('otro server esta corriendo desde el puerto 8081')
// })




// Methods: 
// GET  -> Obtener algo (no llevan cuerpo) si se le pone cuerpo el cuerpo es ignorado
// PUT  -> Reemplazar ya creado en el servidor
// POST -> Crear algo en el servidor 
// DELETE -> Eliminar
// PATCH -> Actualizar algo creado en el servidor

// URL https://api.kodemia.mx/koders
// GET https://api.kodemia.mx/koders -> Regresa un listado de Koders
// POST https://api.kodemia.mx/koders -> Registra un koder
// DELETE https://api.kodemia.mx/koders -> Elimina un koder


// https://api.kodemia.mx/mentors
// GET https://api.kodemia.mx/mentors -> Regresa una lista de mentores
// GET https://api.kodemia.mx/mentors/123/bootcamps -> lsita de bootcamps del mentor correspondiente


