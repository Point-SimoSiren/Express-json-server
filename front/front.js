
function getProducts() {
    fetch('http://localhost:3300/api/products') // tehdään http get pyyntö
    .then(res => res.json()) // muutetaan palvelimen vastaus javascript muotoon
    .then(data => alert("Procuct name: " + data[0].name + ", price: " + data[0].price))
}