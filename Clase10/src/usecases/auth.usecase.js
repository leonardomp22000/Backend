const jwt = require("../lib/jwt");
const Koders = require("../models/koders.model");
const createError = require("http-errors");
const encrypt = require("../lib/encrypt");

async function login(email, password) {
  const koder = await Koders.findOne({ email: email });
  if (!koder) {
    throw createError(401, "Invalid Data");
  }

  const isPasswordValid = await encrypt.compare(password, koder.password);
  if (!isPasswordValid) {
    throw createError(401, "Invalid Data");
  }

  const token = jwt.sign({ id: koder._id });
  return token;
}

module.exports = {
  login,
};
