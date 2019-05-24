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