var button = document.querySelector("button#login");
        var div1 = document.querySelector("div#form");
        button.onclick = function () {
            var newDiv = document.createElement("div");
            newDiv.style.width = 100;
            newDiv.style.height = 100;
            newDiv.style.backgroundColor = "#f00";
            div1.appendChild(newDiv);
        }