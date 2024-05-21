const fs = require('fs')
fs.writeFileSync('./hola.txt', 'Hola mundo')

const leido = fs.readFileSync('./hola.txt','utf-8')
console.log(leido)