// Funciones o acciones que puede ejecutar el usuario al usar cada ruta. Acciones tras bambalinas
const Mentors = require("../models/mentors.model");

async function getAll() {
  const allMentors = await Mentors.find();
  return allMentors;
}

async function add(mentor) {
  const mentorCreated = await Mentors.create(mentor);
  return mentorCreated;
}
async function getById(id) {
  const mentor = await Mentors.findById(id);
  return mentor;
}
async function deleteById(id) {
  const mentorDeleted = await Mentors.findByIdAndDelete(id);
  return mentorDeleted;
}

async function updateById(id, newMentor) {
  const mentorUpdated = await Mentors.findByIdAndUpdate(id, newMentor, {
    new: true,
  });
  return mentorUpdated;
}

module.exports = {
  getAll,
  add,
  getById,
  deleteById,
  updateById,
};
