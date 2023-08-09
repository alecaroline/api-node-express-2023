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
    const dados = req.body

    res.json({
        message: "Produto criado con sucesso",
        dados: dados
    })
})

router.put('/', (req, res) => {   
    // Update
    const dados = req.body

    res.json({
        message: "Produto atualizado con sucesso",
        dados: dados
    })
})

router.delete('/', (req, res) => {   
    // Delete
    const dados = req.body

    res.json({
        message: "Produto deletado con sucesso",
        dados: dados
    })
})

export default router   