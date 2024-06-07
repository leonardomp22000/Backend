const createError = require("http-errors");
const Koders = require("../models/koders.model");
const encrypt = require("../lib/encrypt");
// El modelo sirve para consultar y para crear

// bcript.js npm para encriptar contraseñas

async function create(koderData) {
  const koderFound = await Koders.findOne({ email: koderData.email });
  if (koderFound) {
    throw createError(409, "email already in use");
  }
  const password = await encrypt.encrypt(koderData.password); // Se pone await por que encryot regresa una promesa

  koderData.password = password;
  const newKoder = await Koders.create(koderData);
  //const newKoder = await Koders.create(koderData)
  return newKoder;
}

async function getAll() {
  const allKoders = await Koders.find().populate("generation"); // find sin parametros regresa toda la lista completa se pone el nombre de la referencia
  return allKoders;
}
async function getById(id) {
  const koder = await Koders.findById(id).populate("generation");
  return koder;
}
async function deleteById(id) {
  const koderDeleted = await Koders.findByIdAndDelete(id);
  return koderDeleted;
}
async function updateById(id, newKoderData) {
  const updatedKoder = await Koders.findByIdAndUpdate(id, newKoderData, {
    new: true,
  });
  return updatedKoder;
}

module.exports = {
  create,
  getAll,
  getById,
  deleteById,
  updateById,
};
