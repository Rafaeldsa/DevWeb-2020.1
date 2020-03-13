var div = document.querySelector("div#doacoes");
var btn = document.querySelector("button#btn1");
var body = document.querySelector("body#corpo");
div.style.margin = 0;
div.style.width = 250;
div.style.height = 100;
div.style.backgroundColor = "#f00";


btn.onclick = function() {
    var newDiv = document.createElement("div");

    var h5 = document.createElement("h5");
    var textNode = document.createTextNode("Doador");
    h5.appendChild(textNode);
    newDiv.appendChild(h5);

    
    newDiv.style.margin = 0;
    newDiv.style.width = 250;
    newDiv.style.height = 100;
    newDiv.style.backgroundColor = "#f00";
    body.appendChild(newDiv);
};