/* eslint-disable object-shorthand */
/* eslint-disable no-useless-escape */
/* eslint-disable quotes */
/* eslint-disable arrow-parens */
"use strict";
/** говорит о том в каком режиме находится окно в режиме входа (true) или регистрации (false) */
let haveProfile = true;
let buffer;
let error;
let loginsData = [];
let serialEntry;
let email;
let password;
let checkbox;

loginsData = JSON.parse(localStorage.getItem("loginsArray"));

//формируем цвет из цвета background которым будут скрываться надписи
buffer = document.querySelector(".form__body");
const invisibleColor = getComputedStyle(buffer).backgroundColor;

/** Состояние окна Входа на старте */
const onState0 = () => {
    // Скрываем сообщения под окнами ввода
    let buffer = document.querySelectorAll(".interactive-field__message");
    buffer.forEach(element => {
        element.style.color = invisibleColor;
    });

    // Красим в серый цвет надпись Email
    buffer = document.querySelector(".form__input-email.interactive-field__title");
    buffer.style.color = "#787878";

    //Скрываем астериксы
    buffer = document.querySelectorAll(".interactive-field__ast");
    buffer.forEach(element => {
        element.style.color = invisibleColor;
    });

    //Скрываем название поля "Пароль"
    buffer = document.querySelector(".form__input-password.interactive-field__title");
    buffer.style.color = invisibleColor;

    //Убираем астерикс на чекбоксе
    buffer = document.querySelector(".checkbox__ast");
    buffer.style.color = invisibleColor;

    //Убираем сообщение на чекбоксе
    buffer = document.querySelector(".checkbox__message");
    buffer.style.color = invisibleColor;

    //Фикс записей которые могут быть изменены при переходе из других стейтов
    buffer = document.querySelector(".form__button-mode");
    buffer.value = "Зарегистрироваться";
    buffer = document.querySelector(".form__title");
    buffer.innerHTML = "Вход";
    buffer = document.querySelector(".checkbox__value");
    buffer.innerHTML = "Я согласен получать обновления на почту";
    buffer = document.querySelector(".form__button-submit");
    buffer.value = "Войти";

    //Фикс рамок, которые могли быть изменены
    buffer = document.querySelectorAll(".interactive-field__body");
    buffer.forEach(element => {
        element.style.borderColor = "#787878";
    });
    buffer = document.querySelector(".checkbox__mark");
    buffer.style.outline = ""; //2px solid #787878

};

/**Исходное состояние окна при заходе на регистрацию */
const onState1 = () => {

    // Скрываем сообщения под окнами ввода
    buffer = document.querySelectorAll(".interactive-field__message");
    buffer.forEach(element => {
        element.style.color = invisibleColor;
    });

    // Красим в серый цвет надпись Email
    buffer = document.querySelector(".form__input-email.interactive-field__title");
    buffer.style.color = "#787878";

    //Показываем астериксы серым цветом
    buffer = document.querySelectorAll(".interactive-field__ast");
    buffer.forEach(element => {
        element.style.color = "#787878";
    });

    //Показываем название поля "Пароль" серым цветом
    buffer = document.querySelector(".form__input-password.interactive-field__title");
    buffer.style.color = "#787878";

    //Ставим астерикс на чекбоксе
    buffer = document.querySelector(".checkbox__ast");
    buffer.style.color = "#787878";

    //Убираем сообщение на чекбоксе
    buffer = document.querySelector(".checkbox__message");
    buffer.style.color = invisibleColor;

    //Фикс записей которые могут быть изменены при переходе из других стейтов
    buffer = document.querySelector(".form__button-mode");
    buffer.value = "Авторизоваться";
    buffer = document.querySelector(".form__title");
    buffer.innerHTML = "Регистрация";
    buffer = document.querySelector(".checkbox__value");
    buffer.innerHTML = 'Я согласен с <a href="">Правилами пользования приложением</a>';
    buffer = document.querySelector(".form__button-submit");
    buffer.value = "Регистрация";

    //Фикс рамок, которые могли быть изменены
    buffer = document.querySelectorAll(".interactive-field__body");
    buffer.forEach(element => {
        element.style.borderColor = "#787878";
    });
    buffer = document.querySelector(".checkbox__mark");
    buffer.style.outline = ""; //2px solid #787878
};

function validateEmail(email) {
    const re = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
    return re.test(String(email));
}

/** Главный цикл */

onState0();

const buttonMode = document.querySelector(".form__button-mode");
buttonMode.onclick = () => {
    haveProfile = !haveProfile;
    if (haveProfile) {
        onState0();
    } else {
        onState1();
    }
};

const standartCheckFail = () => {
    if (!validateEmail(email)) {
        buffer = document.querySelector(".form__input-email.interactive-field__body");
        buffer.style.borderColor = "red";
        buffer = document.querySelector(".form__input-email.interactive-field__message");
        buffer.style.color = "red";
        buffer.innerHTML = "Email невалидный";
        buffer = document.querySelector(".form__input-email.interactive-field__ast");
        buffer.style.color = "red";
        buffer = document.querySelector(".form__input-email.interactive-field__title");
        buffer.style.color = "red";
        error = true;
    }

    if (password.length < 8) {
        buffer = document.querySelector(".form__input-password.interactive-field__body");
        buffer.style.borderColor = "red";
        buffer = document.querySelector(".form__input-password.interactive-field__message");
        buffer.style.color = "red";
        buffer.innerHTML = "Пароль должен содержать как минимум 8 символов";
        buffer = document.querySelector(".form__input-password.interactive-field__ast");
        buffer.style.color = "red";
        buffer = document.querySelector(".form__input-password.interactive-field__title");
        buffer.style.color = "red";
        error = true;
    }

    if (email === "") {
        buffer = document.querySelector(".form__input-email.interactive-field__body");
        buffer.style.borderColor = "red";
        buffer = document.querySelector(".form__input-email.interactive-field__message");
        buffer.style.color = "red";
        buffer.innerHTML = "Поле обязательно для заполнения";
        buffer = document.querySelector(".form__input-email.interactive-field__ast");
        buffer.style.color = "red";
        buffer = document.querySelector(".form__input-email.interactive-field__title");
        buffer.style.color = "red";
        error = true;
    }

    if (password === "") {
        buffer = document.querySelector(".form__input-password.interactive-field__body");
        buffer.style.borderColor = "red";
        buffer = document.querySelector(".form__input-password.interactive-field__message");
        buffer.style.color = "red";
        buffer.innerHTML = "Поле обязательно для заполнения";
        buffer = document.querySelector(".form__input-password.interactive-field__ast");
        buffer.style.color = "red";
        buffer = document.querySelector(".form__input-password.interactive-field__title");
        buffer.style.color = "red";
        error = true;
    }

    if (!checkbox) {
        buffer = document.querySelector(".checkbox__mark");
        buffer.style.outline = "2px solid red";
        buffer = document.querySelector(".checkbox__message");
        buffer.style.color = "red";
        buffer.innerHTML = "Поле обязательно для заполнения";
        buffer = document.querySelector(".checkbox__ast");
        buffer.style.color = "red";
        error = true;
    }
    return error;
};

const buttonSubmit = document.querySelector(".form__button-submit");
buttonSubmit.onclick = () => {
    error = false;
    email = document.querySelector(".form__input-email.interactive-field__body").value.trim();
    password = document.querySelector(".form__input-password.interactive-field__body").value.trim();
    checkbox = document.querySelector(".checkbox__mark").checked;
    if (haveProfile) {
        // Если находимся в режиме ввода
        onState0();

        if (standartCheckFail()) { return; }

        loginsData = loginsData || [];
        loginsData.forEach(element => {
            if (element.email === email) {
                if (element.password === password) {
                    buffer = document.querySelector(".form__body");
                    buffer.style.display = "none";
                    window.location.href = "site.html";
                }
            }
        });
        // Остается только ошибка несоответствия пароля или email
        buffer = document.querySelector(".form__input-email.interactive-field__body");
        buffer.style.borderColor = "red";
        buffer = document.querySelector(".form__input-email.interactive-field__message");
        buffer.style.color = invisibleColor;
        buffer.innerHTML = "Логин или Пароль невереный";
        buffer = document.querySelector(".form__input-email.interactive-field__ast");
        buffer.style.color = "red";
        buffer = document.querySelector(".form__input-email.interactive-field__title");
        buffer.style.color = "red";
        buffer = document.querySelector(".form__input-password.interactive-field__body");
        buffer.style.borderColor = "red";
        buffer = document.querySelector(".form__input-password.interactive-field__message");
        buffer.style.color = "red";
        buffer.innerHTML = "Логин или Пароль невереный";
        buffer = document.querySelector(".form__input-password.interactive-field__ast");
        buffer.style.color = "red";
        buffer = document.querySelector(".form__input-password.interactive-field__title");
        buffer.style.color = "red";
    } else {
        // Если находимся в режиме регистрации
        // Сбрасываем поля на дефолт
        onState1();

        loginsData = loginsData || [];
        loginsData.forEach(element => {
            if (element.email === email) {
                buffer = document.querySelector(".form__input-email.interactive-field__body");
                buffer.style.borderColor = "red";
                buffer = document.querySelector(".form__input-email.interactive-field__message");
                buffer.style.color = "red";
                buffer.innerHTML = "Пользователь с таким email уже существует";
                buffer = document.querySelector(".form__input-email.interactive-field__ast");
                buffer.style.color = "red";
                buffer = document.querySelector(".form__input-email.interactive-field__title");
                buffer.style.color = "red";
                error = true;
            }
        });

        if (error || standartCheckFail()) { return; }

        console.log("{");
        console.log("   email: '", email, "',");
        console.log("   password: '", password, "',");
        console.log("}");

        loginsData = loginsData || [];
        loginsData.push({ email: email, password: password });
        serialEntry = JSON.stringify(loginsData);
        localStorage.setItem("loginsArray", serialEntry);
        haveProfile = !haveProfile;
        onState0();
    }
};

