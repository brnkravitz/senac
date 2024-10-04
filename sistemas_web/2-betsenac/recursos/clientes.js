const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')
let clientes = []

//Buscar Clientes
router.get('/', (req, res) => {
    let resultado = []
    clientes.forEach((cliente) => { 
        const { nome, documento } = req.query
        if (
            cliente.nome.includes(nome) ||
            cliente.documento.includes(documento)
        ) {
            resultado.push(cliente)
        }
    })
    res.send(resultado)
})
//Fim Buscar Clientes

//Buscar cliente por ID
router.get('/:id', (req, res) => {
    const id = req.params.id
    for (let i = 0; i < clientes.length; i++) {
        const cliente = clientes[i]

        if (cliente.id === id) {
            res.send(cliente)
            return
        }
    }
    res.status(404).send('Cliente não foi encontrado!')
})
//Fim buscar cliente por ID


//Deletar cliente
router.delete('/:id', (req, res) => {
    const id = req.params.id
    for (let i = 0; i < clientes.length; i++) {
        const cliente = clientes[i]
        if (cliente.id === id) {
            clientes.splice(i, 1)
            res.send(cliente)
            return
        }
    }
    res.status(404).send('Cliente não foi encontrado!')
})
//Fim Deletar Cliente


//Atualizar Cliente
router.put('/:id', (req, res) => {
    const id = req.params.id
    for (let i = 0; i < clientes.length; i++) {
        const cliente = clientes[i]
        if (cliente.id === id) {
            const { nome, documento, dataNascimento } = req.body
            cliente.nome = nome
            cliente.documento = documento
            cliente.dataNascimento = dataNascimento
            res.send(cliente)
            return
        }
    }
    res.status(404).send('Cliente não foi encontrado!')
})
//Fim Atualizar Cliente


//Cadastrar clientes
router.post('/', (req, res) => {
    const { nome, documento, dataNascimento } = req.body
    const cliente = ({ id: uuidv4(), nome, documento, dataNascimento })
    clientes.push(cliente)
    res.send(cliente)
})
//Fim do cadastro clientes

module.exports = router