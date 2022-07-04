import User from '../Model/userModel.js'
import asyncHandler from 'express-async-handler'


export const getUsers = asyncHandler(async(req, res) => {
    const users = await User.find({})
    res.json(users)
})

export const getUserById  = asyncHandler(async(req, res) => {
    const user = await User.findById(req.params.id)

    
    if(user){
        res.json(user)
    }else{
        res.status(404).json({message: "User not found"})
        res.status(404)
        throw new Error('User not found')
    }
})