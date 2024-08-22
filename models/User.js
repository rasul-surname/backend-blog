import mongoose from 'mongoose'

// MVC - model view controller
const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    passwordHash: {
        type: String,
        required: true,
    },
    avatarUrl: String
}, {
    // так мы говорим что при создании должна прикрутить дату создания и обновления
    timestamps: true,
})

export default mongoose.model('User', UserSchema)












































