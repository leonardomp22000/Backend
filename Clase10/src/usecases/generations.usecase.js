const Generation = require("../models/generations.model");
const createError = require("http-errors");

async function create(generation) {
  const existGeneration = await Generation.findOne({
    number: generation.number,
    program: generation.program,
  });
  if (existGeneration) {
    throw createError(409, "Generation already exist");
  }
  return Generation.create(generation);
}

async function getAll() {
  return await Generation.find();
}

async function getById(id) {
  return await Generation.findById(id);
}

async function updateById(id, generation) {
  return await Generation.findByIdAndUpdate(id, generation, { new: true });
}
async function deleteById(id) {
  return await Generation.findByIdAndDelete(id);
}

module.exports = {
  create,
  getAll,
  getById,
  updateById,
  deleteById,
};

// Se guarda el token en local Storage (temporal) y con un fetch se trae para la autenticacion
