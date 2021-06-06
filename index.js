const createError = require('http-errors') // tratativas de erros.
const express = require('express')
const app = express()
const logger = require('morgan')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.get('/', (req, res) => res.send("Nada por aqui :)"))

app.use((req, res, next) => {
    next(createError(404))
})

app.use((err, req, res) => {
    res.status(err.status || 500) //mensagem de erro.
    res.json(err)
})

module.exports = app;