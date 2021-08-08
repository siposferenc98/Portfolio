var xhttp = new XMLHttpRequest();
var responseDiv = document.getElementById("resp");
xhttp.onload = function () {
    responseDiv.innerHTML = this.responseText;
};
xhttp.open("GET", "http://siposferenc04.atw.hu/index.php");
xhttp.send();
