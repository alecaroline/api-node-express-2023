import express from 'express'

const router = express.Router()


// Exemplo de rota usandp o método GET
router.get('/', (req, res) => {   
    const user = [
        {id: 1, nome: "Ale"},
        {id: 2, email: "ale@email.com"},
        {id: 3, name: "Ana"}
    ]
    res.json(user)
})

router.post('/', (req, res) => {   
    // Create
    const dados = req.body
    // console.log(dados.nome)

    res.json({
        message: "Usuário criado com sucesso",
        dados: dados
    })
})

router.put('/', (req, res) => {   
    // Update
    const dados = req.body
    // console.log(dados.nome)

    res.json({
        message: "Usuário atualizado com sucesso",
        dados: dados
    })
})

router.delete('/', (req, res) => {   
    // Delete
    const dados = req.body
    // console.log(dados.nome)

    res.json({
        message: "Usuário deletado com sucesso",
        dados: dados
    })
})

export default router   