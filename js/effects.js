"use strict";

// параллакс
document.addEventListener('scroll', function(event) {
    let sY=scrollY;
    //console.log(sY);
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

let buttonAbout = document.querySelector(".sec_about");
let buttonSkill = document.querySelector(".sec_skill");
let buttonReview = document.querySelector(".sec_review");
let buttonContacts = document.querySelector(".sec_contacts");
let buttonPortfolio = document.querySelector(".sec_portfolio");

let buttonEmail = document.querySelector(".footer__email");
let buttonTelegram = document.querySelector(".footer__telegram");

let buttonMain = document.querySelector(".main__button");


buttonAbout.onclick = function () {
    window.scrollTo(0, 1100);
}

buttonSkill.onclick = function () {
    window.scrollTo(0, 420);
}

buttonReview.onclick = function () {
    window.scrollTo(0, 3677);
}

buttonContacts.onclick = function () {
    window.scrollTo(0, 3677);
}

buttonPortfolio.onclick = function () {
    window.scrollTo(0, 2030);
}

buttonEmail.onclick = function () {
    window.open( String( "mailto:ihahahojymail.ru?subject=Портфолио" ).replace('y', '@') );
}

buttonTelegram.onclick = function () {
    window.open( String( "https://t.me/Hihahoj" ).replace('i', 'a') );
}

buttonMain.onclick = function () {
    window.open( "https://hahahoj.github.io/smallsite/download/Григорьев Владимир Александрович - Программист 2022.zip" );
}

