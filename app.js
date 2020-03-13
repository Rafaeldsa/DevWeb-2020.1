var div = document.querySelector("div#form");
var button = document.querySelector("button#login");

button.onclick = function () {
    var newDiv = document.createElement("div");
    newDiv.style.width = 100;
    newDiv.style.height = 100;
    newDiv.style.backgroundColor = "#f00";
    div.appendChild(newDiv);
}