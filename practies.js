// 1. создать сервер express
import express from 'express'
import jwt from 'jsonwebtoken'
import UserModel from './models/User.js'
import {validationResult} from "express-validator"
import {registerValidation} from "./validations/auth.js"

const app = express()
app.use(express.json())
// 2. запустить express с порта 4000 и вернуть в консоли DB OK если всё хорошо, иначе ошибку
app.listen(4000, (err) => {
    if (err) {
        return console.log(err)
    }

    return console.log('DB OK')
})
// 3. Верните success = true для GET запроса по адресу /
app.get('/', (req, res) => {
    console.log('hellosdf')
    res.send('dsf')
})

// 4. Верни success = true для POST запроса по адресу /auth/register
// 5. Верни в консоли то что ввёл пользователь в POST запросе
// 6. Сгенерируй токен из fullName юзера и отправь юзеру
// 7. Подключиться к mongoDB через mongoose и обработать error и success
// 8. Создать модель пользователя с fullName, email, passwordHash и опциональным avatarUrl
// 9. Создать валидацию для модели пользователя
app.post('/auth/register', registerValidation, async (req, res) => {
    // try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json(errors.array())
        }

        const doc = new UserModel({
            email: req.body.email,
            password: req.body.password,
            fullName: req.body.fullName,
            avatarUrl: req.body.avatarUrl,
        })


    // } catch (e) {
    //     req.status(500).json({
    //         message: 'Не удалось зарегистрироваться'
    //     })
    // }
})


// N. Создайте пользовательскую модель с fullName, email, passwordHash, avatarUrl, timestamps







// "type": "module" - import синтаксис, иначе require
// nodemon - life server
// insomnia - для post запросов
// jsonwebtoken - для создания токена
// mongodb - БД
// mongoose - для подключения к БД
// express-validator - валидатор
// bcrypt - шифровать пароль
