import express from 'express'
import mongoose from 'mongoose'
import multer from 'multer'
import cors from 'cors'
import { UserController, PostController } from './controllers/index.js'
import { handleValidationErrors, checkAuth } from './utils/index.js'
import { loginValidation, postCreateValidation, registerValidation } from './validations/index.js'

mongoose
    .connect('mongodb+srv://admin:qwerty123@cluster0.6c0kxeq.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('DB OK'))
    .catch((err) => console.log('DB error', err))

const app = express()
app.use(express.json())
app.use(cors())
app.use('/uploads', express.static('uploads'))

app.listen(4444, (err) => {
    err ? console.log(err) : console.log('Server OK')
})

const storage = multer.diskStorage({
    destination: (a, b, callback) => {
        callback(null, 'uploads')
    },
    filename: (_, file, callback) => {
        callback(null, file.originalname)
    },
})

const upload = multer({storage})

app.post('/upload', checkAuth, upload.single('image'), (req, res) => {
    res.json({
        url: `/uploads/${req.file.originalname}`
    })
})

app.post('/auth/register', registerValidation, handleValidationErrors, UserController.register)
app.post('/auth/login', loginValidation, handleValidationErrors, UserController.login)
app.get('/auth/me', checkAuth, UserController.getMe)

app.get('/tags', PostController.getLastTags)

app.get('/posts', PostController.getAll)
app.get('/posts/tags', PostController.getLastTags)
app.get('/posts/:id', PostController.getOne)
app.post('/posts', checkAuth, postCreateValidation, PostController.create)
app.patch('/posts/:id', checkAuth, postCreateValidation, PostController.update)
app.delete('/posts/:id', checkAuth, PostController.remove)

