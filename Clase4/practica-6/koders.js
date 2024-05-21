const fs  = require('fs')
const dbFile = 'koders.json'
const arg =  process.argv[3]
function init() {
    // Si existe el archivo bfFile
    const fileExists =  fs.existsSync(dbFile)
    if(!fileExists){
        fs.writeFileSync(dbFile, JSON.stringify({koders: []}))
    }
}
function getKoders() {
    const content = fs.readFileSync(dbFile, 'utf-8' )
    return JSON.parse(content).koders
}

function updateKoders(result) {
    const newObject = { koders: result}
    fs.writeFileSync(dbFile, JSON.stringify(newObject))
}
function add(koder) {
    const koderList = getKoders()
    koderList.push(koder)
    updateKoders(koderList)
 }
function ls() {
    const content = getKoders()
    console.log('Lista de Koders: ', JSON.stringify(content))
}

function reset() {
    const newObject = {koders: []}
    fs.writeFileSync(dbFile, JSON.stringify(newObject))
    
}

function remove(koderName) {
    let koderList = getKoders()
    if(koderList.includes(koderName)){
        const result = koderList.filter((koder) => koder != koderName) 
        updateKoders(result)
        console.log('Nombre borrado')
    }else{
        console.log('El nombre ingresado no se encuentra en la lista')
    } 
}

function validation() {
    if (arg == null){
        console.error('No se recibio el argumento')
        process.exit(1)
    }  
}



//add('Alan')
function main() {
    const command = process.argv[2]
    
    init()
    switch (command) {
        case 'add':
            validation()
            add(arg)
            
            break;
        case 'ls': 
            ls()
            break;
    
        case 'rm':
            validation()
            remove(arg) 
            break; 
            
        case 'reset': 
            reset()
            break;
    
        default:
            console.error('No existe el comando solicitado')
            process.exit(1)
            break;
    }
}

main()



