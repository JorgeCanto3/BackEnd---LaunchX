//Objeto Express
const express = require('express')

//App de Express
const app = express()

//Indicamo que usaremos .Json
app.use(express.json())

//Puerto en el que veremos nuestra app: localhost:6000
const port = 3000

//Inicializamos la app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

//Http Methods
app.get('/v1/Explorers', (req, res) => {
    console.log(`API Explores GET ALL Requests`)
    const explorer1 = { id: 1, name: 'Jorge1' }
    const explorer2 = { id: 2, name: 'Jorge2' }
    const explorer3 = { id: 3, name: 'Jorge3' }
    const explorer4 = { id: 4, name: 'Jorge4' }
    const explorer5 = { id: 5, name: 'Jorge5' }
    const explorers = [explorer1, explorer2, explorer3, explorer4, explorer5]
    res.status(200).json(explorers)
})

app.get('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers Get request ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)
    const explorer = { id: 1, name: "Jorge" }
    res.status(200).json(explorer)
})

app.post('/v1/explorers', (req, res) => {
    console.log(`Api Explorers Post request ${new Date()}`)
    const RequestsBody = req.body
    //Parametros de un cliente
    res.status(201).json({ message: "Created" })
})

app.put('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers PUT request ${new Date()}`)
    console.log(`Update explorer with id ${req.params.id}`)
    const RequestsBody = req.body
    res.status(200).json({ message: "Updated!" })
})

app.delete('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers DELETE request ${new Date()}`)
    console.log(`Update explorer with id ${req.params.id}`)
    const RequestsBody = req.body
    res.status(200).json({ message: "Deleted" })
})