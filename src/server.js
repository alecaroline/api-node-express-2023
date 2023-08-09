import express from 'express'
import bodyParser from 'body-parser'


import userRoute from './router/userRouter.js'
import productRoute from './router/productRoute.js'
import logger from './middlewares/logger.js'

import {PORT} from './config.js'

const api = express()

//middleware logger
api.use(logger)
api.use(bodyParser.json())

// '/': raíz da requisição
// req: requisição
// es: resposta

api.get('/', (req, res) => {
    res.json({message: "Bem vindo a API"})
})

api.use('/user', userRoute)
api.use('/product', productRoute)


api.all('*', logger, (req, res) => {   
    // 
    res.status(404).json({message: "Rota não encontrada!"})
})


// liga o servidor através da porta estabelecida no config.js
api.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)
})