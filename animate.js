function fadeIn() {
    var desc = document.getElementById("desc");
    desc.style.transitionDelay = "0.5s";
    desc.style.transitionDuration = "1s";
    desc.style.opacity = '1';
}
function scrollFadeIn() {
    var mainDiv = document.getElementById("mainDiv");
    mainDiv.style.transitionDelay = "1s";
    mainDiv.style.transitionDuration = "1s";
    mainDiv.style.opacity = '1';
}
//window.onscroll = function(){scrollFadeIn()};
fadeIn();
scrollFadeIn();

