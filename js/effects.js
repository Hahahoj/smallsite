"use strict";

// параллакс
document.addEventListener('scroll', function(event) {
    let sY=scrollY;
	if (sY<1150) {
        console.log(sY);
        let buffer = document.querySelector(".about-sphere");
        buffer.style.top = Math.floor((sY-1066)/15+1066)+"px";
        buffer = document.querySelector(".skills-sphere");
        buffer.style.top = Math.floor((sY+40)/10-40)+"px";
        buffer.style.right = Math.floor((sY+40)/10-200)+"px";
        buffer = document.querySelector(".sphere-decor");
        buffer.style.top = Math.floor((sY+425)/8-425)+"px";
    }
});