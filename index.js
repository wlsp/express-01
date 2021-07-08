
const express = require('express');

const app = express();

//  Port festlegen
const PORT = procress.env.PORT || 3000

// statische Dateien servieren
app.use(express.static('public'))


// Wir definieren, mit welcher Methode die Anfrage kommt: 
// Aufbau, (PFDA, CALLBACK)
app.get('/', (req, res) => {
    // res.send("<h1>Moin moin from the Darkside of Express</h1>")

    // sendFile nur güt HTML 
    // (PFAD, {OPTIONKEY: OPTIONVALUE, ... })
    res.sendFile('./views/index.html', {root: __dirname})
})

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', {root: __dirname})
})

app.get('/about-me', (req, res) => {
    res.redirect('/about')
})

const heros = [
    {name: "Batman", age: 42},
    {name: "Superman", age: 105},
]

app.get('/api', (req, res) => {
    res.json(heros)
})

app.get('/api/:egal', (req, res) => {
    console.log(req.params.egal)
    // res.send(req.params.egal)
    res.json(heros[req.params.egal])
})

app.use((req, res) => {
    // Statu setzten
    // res.status(404)
    // res.sendFile('./views/404.html', {root: __dirname})

    res.status(404).sendFile('./views/404.html', {root: __dirname})
})
app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`))