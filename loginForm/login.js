var xhttp = new XMLHttpRequest();
var responseDiv = document.getElementById("resp");
xhttp.onload = function () {
    responseDiv.innerHTML = this.responseText;
};
xhttp.open("GET", "https://siposferenc04.atw.hu/index.php");
xhttp.send();
