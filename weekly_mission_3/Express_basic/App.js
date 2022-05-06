//Objeto express
const express = require('express')

//App de express
const app = express()

//Puerto en que vamos a ver nuestra app: Localhost:3000
const port = 3000

//path inicial, responderá a la url localhost:3000
app.get("/", (req, res) => {
    res.send("Hello World!")
})

//Inicializamos esta app de la siguiente manera
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

//New rute
//Answering Text
//local.host:3000/launchx
app.get('/Launchx', (req, res) => {
    res.send('Bienvenido a casa manolo')
})

//Ruta para regresar un objeto
//localhost:3000/explorersInNode
app.get('/explorersInNode', (req, res) => {
    const explorer = { name: "Explorer", msg: "Hey!" }
    res.send(explorer)
})

//Query Params (Parámetros): Recibir parametros por la Url
//http://localhost:3000/explorers/Jorge
//rq.params = {"/explorerName":"Jorge"}
app.get('/explorers/:explorerName', (req, res) => {
    res.send(req.params)
})