var div = document.querySelector('div#doacoes')
var btn = document.querySelector('button#btn1')
var body = document.querySelector('body#corpo')
div.style.margin = 0
div.style.width = 250
div.style.height = 100
div.style.backgroundColor = '#f00'

btn.onclick = async () => {
  let response = await fetch('data.json')
  let dados = await response.json()
  var doador = dados[0]['nome']
  var tipo = dados[0]['tipo']
  var newDiv = document.createElement('div')

  var h51 = document.createElement('h5')
  var textNode = document.createTextNode(doador)
  h51.appendChild(textNode)
  var h52 = document.createElement('h5')
  var textNode2 = document.createTextNode(tipo)
  h52.appendChild(textNode2)
  newDiv.appendChild(h51)
  newDiv.appendChild(h52)

  newDiv.style.margin = 0
  newDiv.style.width = 250
  newDiv.style.height = 100
  newDiv.style.backgroundColor = '#f00'
  body.appendChild(newDiv)
}
