const Koders = require('../models/koders.model')
// El modelo sirve para consultar y para crear
async function create(koderData) {
    const newKoder = await Koders.create(koderData)
    return newKoder
}

async function getAll() {
    const allKoders = await Koders.find()// find sin parametros regresa toda la lista completa 
    return allKoders
}
async function getById(id) {
    const koder = await Koders.findById(id)
    return koder
}
async function deleteById(id) {
    const koderDeleted = await Koders.findByIdAndDelete(id)
    return koderDeleted
}
async function updateById(id, newKoderData) {
    const updatedKoder = await Koders.findByIdAndUpdate(id, newKoderData, { new: true}) 
    return updatedKoder
}


module.exports = {
    create,
    getAll,
    getById,
    deleteById,
    updateById
}