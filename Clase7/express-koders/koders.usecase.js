const db = require("./db")

/**
 * Koder 
 * - name -> string 
 * - generacion -> number
 * - gender -> string
 * - age -> number
 * - isActive -> boolean 
 * @param {*} newKoder 
 */
function add(newKoder) {
    if(!newKoder.name ) throw new Error('name is required ')

    if(!newKoder.generation ) throw new Error('generationis  required ')
    
    newKoder.generation = parseInt(newKoder.generation)
    if(isNaN(newKoder.generation)) throw new Error("Generation must be a number")
    if (newKoder.generation <=0) throw new Error ("Generation must be greater than 0")

    // if(newKoder.gender.toLowerCase() != "m" &&
    //    newKoder.gender.toLowerCase() != 'f' 
    //  ){
    //     throw new Error("Only m, f, and nb values are allowed")
    //  }

    if(!newKoder.gender) throw new Error("Gender is required ") 

     if(!(['f', 'm', 'nb'].includes(newKoder.gender.toLowerCase()))){
        throw new Error("Only m, f, and nb values are allowed")
     }

     if (!newKoder.age) throw new Error("Age is required ")
        newKoder.age = parseInt(newKoder.age)

     if(isNaN(newKoder.age)) throw new Error ('age must be a number')
     if(newKoder.age <= 0) throw new Error ('age must be a greater than 0')

     if(typeof newKoder.isActive != "boolean"){
        throw new Error ("isActive must ve a boolean")
     }
     const dbData = db.read()
     dbData.koders.push(newKoder)
     db.write(dbData)
     return dbData.koders



    
}

function deleteAll() {
    const dbData = db.read()
    dbData.koders =[]
    db.write(dbData)
    return dbData.koders
    
}

function deleteByName(name) {
    if(!name) throw new Error("name is required")

    const dbData = db.read()
    
    dbData.koders = dbData.koders.filter((koder) => koder.name != name)
   
    db.write(dbData)
    
    return dbData.koders
}

function getAll() {
    return db.read().koders
    
}

module.exports = {
    add,
    deleteAll,
    deleteByName,
    getAll
}