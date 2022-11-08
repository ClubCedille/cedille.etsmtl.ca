function myFunction() {
    document.getElementById("body").style.backgroundColor = "black";
    setTimeout(showPage, 3000);
}

function hideButtonDown() {
    document.getElementById("button-down").style.display = "none";
    document.getElementById("button-up").style.display = "block";

}

function hideButtonUp() {
    document.getElementById("button-up").style.display = "none";
    document.getElementById("button-down").style.display = "block";
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
    document.getElementById("body").style.backgroundColor = "rgb(217, 214, 214)";
}

function slideRight(){
    document.getElementById("left").style.marginRight = "-50%";
    document.getElementById("left").style.width = "100%";
    document.getElementById("left").style.zIndex = "2";
    document.getElementById("right").style.zIndex = "0";
    document.getElementById("btn-open1").style.display = "none";
    document.getElementById("btn-close1").style.display = "inline-flex";
    document.getElementById("left").style.transitionTimingFunction = "ease-out";
    document.getElementById("left").style.transitionDuration = "1s";
    document.getElementById("btn-closeXLeft").style.display = "inline-flex";
    
}

function slideLeft(){
    document.getElementById("right").style.marginLeft = "-50%";
    document.getElementById("right").style.width = "100%";
    document.getElementById("right").style.zIndex = "2";
    document.getElementById("left").style.zIndex = "0";
    document.getElementById("btn-open2").style.display = "none";
    document.getElementById("btn-close2").style.display = "inline-flex";
    document.getElementById("right").style.transition = "all 1.5s ease-in-out";
    document.getElementById("btn-closeXRight").style.display = "inline-flex";
}

function closeSlideLeft(){
    document.getElementById("left").style.marginRight = "0%";
    document.getElementById("left").style.width = "50%";
    document.getElementById("left").style.zIndex = "1";
    document.getElementById("right").style.zIndex = "0";
    document.getElementById("btn-close1").style.display = "none";
    document.getElementById("btn-open1").style.display = "inline-flex";
    document.getElementById("left").style.transition = "all 3s ease-in-out";
    document.getElementById("btn-closeXLeft").style.display = "none";
}

function closeSlideRight(){
    document.getElementById("right").style.marginLeft = "0%";
    document.getElementById("right").style.width = "50%";
    document.getElementById("right").style.zIndex = "1";
    document.getElementById("left").style.zIndex = "0";
    document.getElementById("btn-close2").style.display = "none";
    document.getElementById("btn-open2").style.display = "inline-flex";
    document.getElementById("right").style.transition = "all 3s ease-in-out";
    document.getElementById("btn-closeXRight").style.display = "none";
}