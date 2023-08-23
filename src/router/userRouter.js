import express from 'express'
import listUsers from '../controllers/user/listUsers.js'
import getUser from '../controllers/user/getUser.js'
import createUser from '../controllers/user/createUser.js'
import updateUsers from '../controllers/user/updateUser.js'
import deleteUser from '../controllers/user/deleteUser.js'

const router = express.Router()


// // Exemplo de rota usandp o método GET
// router.get('/', (req, res) => {   
//     const user = [
//         {id: 1, nome: "Ale"},
//         {id: 2, email: "ale@email.com"},
//         {id: 3, name: "Ana"}
//     ]
//     res.json(user)
// })

router.post('/', createUser)
router.delete('/', deleteUser)
router.get('/', getUser)
router.get('/list', listUsers)
router.put('/', updateUsers)




// router.post('/', (req, res) => {   
//     // Create
//     const dados = req.body
//     // console.log(dados.nome)

//     res.json({
//         message: "Usuário criado com sucesso",
//         dados: dados
//     })
// })

// router.put('/', (req, res) => {   
//     // Update
//     const dados = req.body
//     // console.log(dados.nome)

//     res.json({
//         message: "Usuário atualizado com sucesso",
//         dados: dados
//     })
// })

// router.delete('/', (req, res) => {   
//     // Delete
//     const dados = req.body
//     // console.log(dados.nome)

//     res.json({
//         message: "Usuário deletado com sucesso",
//         dados: dados
//     })
// })

export default router   