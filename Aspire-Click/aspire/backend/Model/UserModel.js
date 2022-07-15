import mongoose from 'mongoose'

const userSchema = mongoose.Schema({

    Name: {
        type: String,

    },
    Email: {
        type: String,

        unique: true
    },
    Password: {
        type: String,
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

export default User