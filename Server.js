const express = require('express')
const app = express()
const path = require('path')
const tuotteet = require('./products.json')

// Tehdään polkumääritys public kansioon 
const polku = path.join(__dirname, './front')

// Sanotaan että em. polussa on tiedostosisältö jota palvelin käyttää
// kun se saa http requestin
app.use(express.static(polku))

// Rest api rajapinta ja
// kontrolleri metodi joka palauttaa json dataa 
app.get('/api/products', (req, res) => {
    res.json(tuotteet)
    })


app.listen(3300, () => {
    console.log('Server is up on port 3300.')
})
