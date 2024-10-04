const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')
let apostas = []


//Cadastrar uma aposta
router.post('/', (req, res) => {
    const { idCliente, valor, evento } = req.body
    const aposta = {
        id: uuidv4(),
        idCliente,
        valor,
        evento
    }
    apostas.push(aposta)
    res.send(aposta)

})
//Fim do cadastro da aposta.


//Buscar aposta pelo evento
router.get('/', (req, res) => {
    let resultado = []
    apostas.forEach((aposta) => {
        const { evento, idCliente } = req.query
        if (
            aposta.evento.includes(evento) ||
            aposta.idCliente.includes(idCliente)
        ) {
        resultado.push(aposta)
    }
})
res.send(resultado)
})
//Fim buscar aposta pelo evento


//Buscar aposta por id
router.get('/:id', (req, res) => {
    const id = req.params.id
    for (let i = 0; i < apostas.length; i++) {
        const aposta = apostas[i]

        if (aposta.id === id) {
            res.send(aposta)
            return
        }
    }
    res.status(404).send('Aposta não foi encontrada')
})
//Fim buscar aposta por id


//Remover aposta
router.delete('/:id', (req, res) => {
    const id = req.params.id
    for (let i = 0; i < apostas.length; i++) {
        const aposta = apostas[i]
        if (aposta.id === id) {
            apostas.splice(i, 1)
            res.send(aposta)
            return
        }
    }
    res.status(404).send('Aposta não foi encontrada!')
})
//Fim remover aposta


//Atualizar aposta
router.put('/:id', (req, res) => {
    const id = req.params.id
    for (let i = 0; i < apostas.length; i++) {
        const aposta = apostas[i]
        if (aposta.id === id) {
            const { valor } = req.body
            aposta.valor = valor
            res.send(aposta)
            return
        }
    }
    res.status(404).send('Aposta atualizada')
})
//Fim Atualizar Aposta



module.exports = router