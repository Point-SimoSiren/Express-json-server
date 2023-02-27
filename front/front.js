
const d = new Date().toLocaleDateString('en-US')
const t = new Date().toLocaleTimeString('en-US')

document.getElementById("pvm").innerText = "Date: " + d + " Time: " + t;

// Teema
function dark() {
    document.getElementsByTagName("body")[0].style.backgroundColor = 'black'
    document.getElementsByTagName("body")[0].style.color = 'silver'
}

function light() {
    document.getElementsByTagName("body")[0].style.backgroundColor = 'white'
    document.getElementsByTagName("body")[0].style.color = 'black'
}

// About sivun näyttäminen
function about() {
  let z = `<h2>About us</h2>
          <h4>We are and old company. A little better than Northwind ;)</h4>`

          document.getElementById("taulukko").innerHTML = z
}

// About sivun näyttäminen
function frontpage() {
  let z = `<h1>Southwind Ltd.</h1>
          <marquee><h4>Welcome!</h4></marquee>`

          document.getElementById("taulukko").innerHTML = z
}



// Tuotehaku
function getProducts() {

    document.getElementById("taulukko").innerHTML = "<h4>Ladataan...</h4>"

let x = "<table><thead><th>Product name</th><th>Price</th></thead><tbody>"

fetch('http://localhost:3000/api/products')
  .then(jsonResponse => jsonResponse.json()) // muutetaan json data javascript muotoon
  .then(oliot => oliot.map(prod => { // loopataan läpi oliot
    x += `<tr><td>${prod.name}</td><td>${prod.price}</td></tr>`
    }
  ))

  setTimeout(() => {
    x += `</tbody></table>`
  document.getElementById("taulukko").innerHTML = x}
  , 500 )

}
// C# esimerkki template stringistä (string interpolation):
// $"Ongelma havaittu lisättäessä tuotetta {product.name}"