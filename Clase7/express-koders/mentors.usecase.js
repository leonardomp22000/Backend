const db = require ("./db")
function add(newMentor) {
    if(!newMentor.name ) throw new Error('name is required ')

        if(!newMentor.generation ) throw new Error('generationis  required ')
        
        newMentor.generation = parseInt(newMentor.generation)
        if(isNaN(newMentor.generation)) throw new Error("Generation must be a number")
        if (newMentor.generation <=0) throw new Error ("Generation must be greater than 0")
    
        // if(newMentor.gender.toLowerCase() != "m" &&
        //    newMentor.gender.toLowerCase() != 'f' 
        //  ){
        //     throw new Error("Only m, f, and nb values are allowed")
        //  }
    
        if(!newMentor.gender) throw new Error("Gender is required ") 
    
         if(!(['f', 'm', 'nb'].includes(newMentor.gender.toLowerCase()))){
            throw new Error("Only m, f, and nb values are allowed")
         }
    
         if (!newMentor.age) throw new Error("Age is required ")
            newMentor.age = parseInt(newMentor.age)
    
         if(isNaN(newMentor.age)) throw new Error ('age must be a number')
         if(newMentor.age <= 0) throw new Error ('age must be a greater than 0')
    
         if(typeof newMentor.isActive != "boolean"){
            throw new Error ("isActive must ve a boolean")
         }
         const dbData = db.read()
         console.log(dbData)
         dbData.mentores.push(newMentor)
         db.write(dbData)
         return dbData.mentores
    
}

function deleteAll() {
    const dbData = db.read()
    dbData.mentores =[]
    db.write(dbData)
    return dbData.mentores
    
}

function deleteByName(name) {
    if(!name) throw new Error("name is required")

    const dbData = db.read()
    
    dbData.mentores = dbData.mentores.filter((koder) => koder.name != name)
   
    db.write(dbData)
    
    return dbData.mentores
}

function getAll() {
    return db.read().mentores
    
}

module.exports = {
    add,
    deleteAll,
    deleteByName,
    getAll
}