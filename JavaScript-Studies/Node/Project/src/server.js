const port = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const database = require('./database')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/products', (req, res, next) => {
    console.log('Middleware 1...')
    next()
})

app.get('/products', (req, res, next) => {
    res.send(database.getProducts()) //will be converted to JSON
})

app.get('/products/:id', (req, res, next) => {
    res.send(database.getProduct(req.params.id))
})

app.post('/products', (req, res, next) => {
    const product = database.saveProduct({
        name: req.body.name,
        price: req.body.price
    })

    res.send(product) //JSON
})

app.put('/products/:id', (req, res, next) => { 
    const product = database.saveProduct({
        id: req.params.id,
        name: req.body.name,
        price: req.body.price
    })

    res.send(product) //JSON
})

app.delete('/products/:id', (req, res, next) => { 
    const product = database.deleteProduct(req.params.id)

    res.send(product) //JSON
})

app.listen(port, () => {
    console.log(`Server is executing on port ${port}.`)
})