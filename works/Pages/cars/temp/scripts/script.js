document.getElementById('main-action').onclick = function () {
    document.getElementById('cars').scrollIntoView({behavior:"smooth"});
}

let buttons = document.getElementsByClassName('car-button');

for (let i=0; i<buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById('price').scrollIntoView({behavior:"smooth"});
    }
}

// бонус - валидация номера телефона
function ValidatePhoneNumber(phoneNumber) {
    return (phoneNumber.match(/^[\d\+][\d\(\)\ -]{4,14}\d$/)); 
}

document.getElementById('price-action').onclick = function () {
    // бонус - для удобства работы с полями создаем переменные и удаляем лишние пробелы
    let name = document.getElementById('name').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let car = document.getElementById('car').value.trim();
    if (name==='') {
        alert('Заполните поле имя!')
    } else {
        if (phone==='') {
            alert('Заполните поле номера телефона!');
        } else {
            if (!ValidatePhoneNumber(phone)) {
                alert('Введенный номер телефона не корректен!');
            } else {
                if (car==='') {
                    alert('Заполните поле типа заказываемой машины!');
                } else {
                    alert('Спасибо за заявку. Мы свяжемся с вами в ближайшее время');
                }
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price-image');
document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.4) / 8) + 'px,' + ((event.clientY * 0.3) / 8) + 'px,0px)';
});

    const elem = document.querySelector(".main");
document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.9 * window.pageYOffset) + 'px';
})
});