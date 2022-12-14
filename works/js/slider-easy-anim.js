/* eslint-disable prefer-const */
"use strict";

//Подстраеваем масштаб под экран
let maxW, maxH, position=0;

function zoomOutMobile() {
    if (position>0) { position--; return; };
    let viewport = document.querySelector('meta[name="viewport"]');
    
    if ( viewport ) {
        maxW=1;
        maxH=1;
        if ( window.innerWidth < 1200 ) {maxW=window.innerWidth/1200;};
        if ( window.innerHeight < 960 ) {maxH=window.innerHeight/960;};
        viewport.content = "initial-scale=1";
        if ( maxW<maxH ) {
            position=1;
//            viewport.content = "height=0";
            viewport.content = "width=device-width";
        } else {
            position=1;
//            viewport.content = "width=0";
            viewport.content = "height=device-height";
        };
        document.body.style.zoom = maxW<maxH ? maxW : maxH;
    }
}

window.addEventListener('resize', function(event) {
    zoomOutMobile();
}, true);

zoomOutMobile();

// Описываем кнопки
let buttonPrev = document.querySelector(".button__prev");
let buttonNext = document.querySelector(".button__next");
//console.log(buttonNext);

let buttonThemePrev = document.querySelector(".button__theme_prev");
let buttonThemeNext = document.querySelector(".button__theme_next");

let buttonStartPizzavill = document.querySelector(".pizza-start");
let buttonStartHouse = document.querySelector(".house-start");
let buttonStartCarsharing = document.querySelector(".carsharing-start");
let buttonStartInput = document.querySelector(".input-start");
let buttonStartBagames = document.querySelector(".bagames-start");
let buttonStartDredd = document.querySelector(".dredd-start");
let buttonStartSlaine = document.querySelector(".slaine-start");

let theme = 1;
let theme_max = 5; 

let pages = document.querySelectorAll(".section.theme0"+theme);
//console.log(pages);
let i = 0;

buttonStartPizzavill.onclick = function() {
    window.open("https://hahahoj.github.io/pizzaville/", "_blank");
} 

buttonStartHouse.onclick = function() {
    window.open("https://hahahoj.github.io/smallsite/works/Pages/oknahouse/", "_blank");
} 

buttonStartCarsharing.onclick = function() {
    window.open("https://hahahoj.github.io/carsharing/", "_blank");
} 

buttonStartInput.onclick = function() {
    window.open("https://hahahoj.github.io/smallsite/works/Pages/forma/", "_blank");
} 

buttonStartBagames.onclick = function() {
    window.open("https://hahahoj.github.io/smallsite/", "_blank");
} 

buttonStartDredd.onclick = function() {
    window.open("https://hahahoj.github.io/smallsite/works/Pages/dredd/JudgeDredd.v.1.02.ru.32.zip", "_blank");
} 

buttonStartSlaine.onclick = function() {
    window.open("https://hahahoj.github.io/smallsite/works/Pages/slaine/Slainev0.9beta.ru.32bit.zip", "_blank");
} 

document.addEventListener('keydown', e=>{
    if (e.key === 'ArrowLeft') {
        Prev();
    } else if (e.key === 'ArrowRight') {
        Next();
    }
}
)

buttonNext.onclick = Next;
buttonPrev.onclick = Prev;

function Next () {
    //console.log("press");
    let str = pages[i].className;
    pages[i++].className = str.replace(" showed", "");
    //console.log(pages);
    if (i >= pages.length) {
        theme = theme+1;
        if (theme>theme_max) {
            theme = 1;
        }
        pages = document.querySelectorAll(".section.theme0"+theme);
        i=0;
    }
    pages[i].className += " showed";
};

function Prev() {
    let str = pages[i].className;
    pages[i--].className = str.replace(" showed", "");
    if (i < 0) {
        theme = theme-1;
        if (theme<1) {
            theme = theme_max;
        }
        pages = document.querySelectorAll(".section.theme0"+theme);
        i=pages.length-1;
    }
    pages[i].className += " showed";
};

buttonThemePrev.onclick = function () {
    pages[i].className = pages[i].className.replace(" showed", "");
    theme = theme-1;
    if (theme<1) {
        theme = theme_max;
    }
    pages = document.querySelectorAll(".section.theme0"+theme);
    i=0;
    pages[i].className += " showed";
}

buttonThemeNext.onclick = function () {
    pages[i].className = pages[i].className.replace(" showed", "");
    theme = theme+1;
    if (theme>theme_max) {
        theme = 1;
    }
    pages = document.querySelectorAll(".section.theme0"+theme);
    i=0;
    pages[i].className += " showed";
}