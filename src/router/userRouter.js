import express from 'express'

const router = express.Router()


// Exemplo de rota usandp o método GET
router.get('/', (req, res) => {   
    const user = [
        {id: 1, name: "João"},
        {id: 2, name: "Maria"},
        {id: 3, name: "Ana"}
    ]
    res.json(user)
})

router.post('/', (req, res) => {   
    // Create
    res.json({message: "Usuário criado con sucesso"})
})

router.put('/', (req, res) => {   
    // Update
    res.json({message: "Usuário atualizado con sucesso"})
})

router.delete('/', (req, res) => {   
    // Delete
    res.json({message: "Usuário deletado con sucesso"})
})

export default router   