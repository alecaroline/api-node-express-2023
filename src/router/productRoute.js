import express from 'express'

const router = express.Router()


// Exemplo de rota usandp o método GET
router.get('/', (req, res) => {   
    const user = [
        {id: 1, name: "Casa"},
        {id: 2, name: "Escola"},
        {id: 3, name: "Trabalho"}
    ]
    res.json(user)
})

router.post('/', (req, res) => {   
    // Create
    res.json({message: "Produto criado con sucesso"})
})

router.put('/', (req, res) => {   
    // Update
    res.json({message: "Produto atualizado con sucesso"})
})

router.delete('/', (req, res) => {   
    // Delete
    res.json({message: "Produto deletado con sucesso"})
})

export default router   