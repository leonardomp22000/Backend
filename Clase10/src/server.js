const express = require('express')
const kodersRouter = require('./routes/koders.router')
const mentorsRouter = require('./routes/mentors.router')
const app = express()

app.use(express.json())

app.use('/koders', kodersRouter)
app.use('/mentors',mentorsRouter )
app.get('/', (request, response)=>{
    response.json({
        message: "API koders"
    })
})

module.exports = app