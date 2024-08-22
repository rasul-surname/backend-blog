import mongoose from 'mongoose'

// MVC - model view controller test
const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
        unique: true,
    },
    tags: {
        type: Array,
        default: []
    },
    imageUrl: String,

    // Для нас
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    viewsCount: {
        type: Number,
        default: 0,
    }
}, { timestamps: true })

export default mongoose.model('Post', PostSchema)












































