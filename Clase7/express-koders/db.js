const fs = require("fs")

const fileName = 'db.json'
const defaultData = {
    koders: [],
    mentores: [],
}

function init() {
    if(!fs.existsSync(fileName)){
        fs.writeFileSync(fileName, JSON.stringify(defaultData))
    } 
}

function read() {
  const dbAsString =   fs.readFileSync(fileName, "utf-8")
  return JSON.parse(dbAsString)
}

function write(dataToWrite) {
    fs.writeFileSync(fileName, JSON.stringify(dataToWrite))
}

module.exports = {
    // init: init // Es lo msimo que la siguiente linea
    init,
    read,
    write
}