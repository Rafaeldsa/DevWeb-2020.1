var div = document.querySelector('div#doacoes');
var btn = document.querySelector('button#btn1');
var body = document.querySelector('body#corpo');

btn.onclick = async () => {
	let response = await fetch('data.json');
	let dados = await response.json();
	var doador = dados[0]['nome'];
	var tipo = dados[0]['tipo'];
	var newDiv = document.createElement('div');

	var h4 = document.createElement('h4');
	var textNode = document.createTextNode(doador);
	h4.appendChild(textNode);
	var p = document.createElement('p');
	var textNode2 = document.createTextNode(`Tipo: ${tipo}`);
	p.appendChild(textNode2);
	newDiv.appendChild(h4);
	newDiv.appendChild(p);

	body.appendChild(newDiv);
};
