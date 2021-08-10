var xhttp = new XMLHttpRequest();
var responseDiv = document.getElementById("resp");
xhttp.open("GET", "https://siposferenc04.rf.gd/index.php");
xhttp.send();

function myfunc(obj)
{
    console.log(obj.name);
}