const mentorUsecases = require('../usecases/mentors.usecase')
const express = require('express')

const router = express.Router()

router.get('/', async(request, response)=>{
    try {
        const allMentors = await mentorUsecases.getAll()
        response.json({
            success: true,
            data: {allMentors}
        })
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            success: false, 
            error: error.message
        })     
    }
})

router.post('/', async(request, response) => {
    try {
        const newMentor = request.body
        const mentorCreated =  await mentorUsecases.add(newMentor)
        response.json({
            success: true, 
            NewMentor: mentorCreated
        })
        
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            success: false, 
            error: error.message
        })     
    }
})
router.get('/:id', async(request, response) =>{
    try {
        const { id } =  request.params
        console.log(id)
        const mentor =  await mentorUsecases.getById(id)
        response.json({
            success: true, 
            mentor: mentor
        })
        
    } catch (error) {     
        response.status(error.status || 500)
        response.json({
            success: false, 
            error: error.message
        })  
    }
})

router.patch('/:id', async(request, response) => {
    try {
        const { id } = request.params
        const mentorUpdated =  await mentorUsecases.updateById(id, request.body)
        response.json({
            success: true, 
            mentorUpdated: mentorUpdated
        })
        
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            success: false, 
            error: error.message
        })
        
    }

})

router.delete('/:id', async(request, response) =>{
    try {
        const {id} = request.params
        const mentorDeleted = await mentorUsecases.deleteById(id)
        response.json({
            success: true,
            mentorDeleted: mentorDeleted 
        })
        
    } catch (error) {
        response.status(error.status || 500)
        response.json({
            success: false, 
            error: error.message
        })

        
    }
})





module.exports = router