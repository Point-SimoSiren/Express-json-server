
function getProducts() {

    document.getElementById("taulukko").innerHTML = "<h4>Ladataan...</h4>"

let x = "<table><thead><th>Product name</th><th>Price</th></thead><tbody>"

fetch('http://localhost:3300/api/products')
  .then(jsonResponse => jsonResponse.json()) // muutetaan json data javascript muotoon
  .then(oliot => oliot.map(prod => { // loopataan läpi oliot
    x += `<tr><td>${prod.name}</td><td>${prod.price}</td></tr>`
    }
  ))

  setTimeout(() => {
    x += `</tbody></table>`
  document.getElementById("sisältö").innerHTML = x}
  , 500 )

}
// C# esimerkki template stringistä (string interpolation):
// $"Ongelma havaittu lisättäessä tuotetta {product.name}"