"use strict";



//Dropdown Meniu animation 


let dropbtn = document.querySelector('.dropbtn');
let dropdownContent = document.querySelector('.dropdown__content');


dropbtn.addEventListener('click', () => {
   
    if (dropdownContent.className == 'dropdown__content on') {
        dropdownContent.classList.remove('on');
    } else {
        dropdownContent.classList.add('on');
    }
});