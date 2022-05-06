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