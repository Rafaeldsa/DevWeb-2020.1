var div = document.querySelector('div#doacoes');
var body = document.querySelector('body#corpo');

async () => {
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

	newDiv.style.margin = 0;
	newDiv.style.width = 250;
	newDiv.style.height = 100;
	body.appendChild(newDiv);
};
