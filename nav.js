var cover = document.getElementById("overlay");
window.onscroll = function() {Gomb()};
var navgomb = document.getElementById("nyit");
var homegomb = document.getElementById("home");
var poz = navgomb.offsetTop;
var x = window.matchMedia("(max-width: 900px)")



function Nyit(x) {
	if (x.matches) {
    document.getElementById("sidenav").style.width = "100%";
  }
  else {
  document.getElementById("sidenav").style.width = "25%";
  document.getElementById("main").style.marginLeft = "25%";
  cover.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  cover.style.display = "block"; }

  document.body.style.overflow = "hidden";
}



function Zar() {
  document.getElementById("sidenav").style.width = "0px";
  document.getElementById("main").style.marginLeft = "0px";
  cover.style.backgroundColor = "";
  cover.style.display = "none";
  document.body.style.overflow = "auto";
}

function Gomb() {
	if (window.pageYOffset > poz)
	{
    
		navgomb.style.position = "fixed";
		navgomb.style.fontSize = "20px";
    homegomb.style.position = "fixed";
    homegomb.style.fontSize = "20px";
	}
	else {
		navgomb.style.position = "absolute";
		navgomb.style.fontSize = "50px";
    homegomb.style.position = "absolute";
    homegomb.style.fontSize = "50px";
	}
	
}

