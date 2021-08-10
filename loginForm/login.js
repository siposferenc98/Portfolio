var xhttp = new XMLHttpRequest();
var responseDiv = document.getElementById("resp");
xhttp.onload = function () {
    responseDiv.innerHTML = this.responseText;
};
xhttp.open("GET", "https://siposferenc04.rf.gd/index.php");
xhttp.send();
