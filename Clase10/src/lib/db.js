const mongoose = require('mongoose')
require('dotenv').config()
const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME

} = process.env
const MONG_URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority&appName=javaScriptKodemia`
// const MONG_URI ='mongodb+srv://leonardomp2200:248163264Lm@javascriptkodemia.6m1hpzc.mongodb.net/?retryWrites=true&w=majority&appName=javaScriptKodemia'
function connect() {
    return mongoose.connect(MONG_URI)
    
}
module.exports = { connect }