"use strict";

// параллакс
document.addEventListener('scroll', function(event) {
    let sY=scrollY;
    //console.log(document.documentElement.clientWidth);
	if ((sY<1150)&&(document.documentElement.clientWidth>1239)) {
        //console.log(sY);
        let buffer = document.querySelector(".about-sphere");
        buffer.style.top = Math.floor((sY-1066)/15+1066)+"px";
        buffer = document.querySelector(".skills-sphere");
        buffer.style.top = Math.floor((sY+40)/10-40)+"px";
        buffer.style.right = Math.floor((sY+40)/10-200)+"px";
        buffer = document.querySelector(".sphere-decor");
        buffer.style.top = Math.floor((sY+425)/8-425)+"px";
    }
});

let buttonEmail = document.querySelector(".footer__email");
let buttonTelegram = document.querySelector(".footer__telegram");

let buttonMain = document.querySelector(".main__button");

buttonEmail.onclick = function () {
    window.open( String( "mailto:ihahahojymail.ru?subject=Портфолио" ).replace('y', '@') );
}

buttonTelegram.onclick = function () {
    window.open( String( "https://t.me/Hihahoj" ).replace('i', 'a') );
}

buttonMain.onclick = function () {
    window.open( "https://hahahoj.github.io/smallsite/download/Григорьев Владимир Александрович - Программист 2022.zip" );
}

