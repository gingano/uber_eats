'use strict';

let menu = document.querySelector('.menu');

let click = (event) => {
    let target = event.target;

    console.log('ok');

    if (target.className === 'menu' ||
        target.className === 'dish') {

    } else {
            target.classList.add('selected_card')
        }
};

menu.addEventListener('click', click);


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector(".btn_up").style.display = "block";
    } else {
        document.querySelector(".btn_up").style.display = "none";
    }
}

function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
