/* eslint-disable prefer-const */
"use strict";

let buttonPrev = document.querySelector(".button__prev");
let buttonNext = document.querySelector(".button__next");

let buttonThemePrev = document.querySelector(".button__theme_prev");
let buttonThemeNext = document.querySelector(".button__theme_next");

let theme = 1;
let theme_max = 3; 


let pages = document.querySelectorAll(".section.theme0"+theme);
let i = 0;

buttonNext.onclick = function() {
    let str = pages[i].className;
    pages[i++].className = str.replace(" showed", "");
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

buttonPrev.onclick = function() {
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