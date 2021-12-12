"use strict";
document.addEventListener("DOMContentLoaded", function() { 
let btn = document.querySelector('.hamburger');
let nav1 = document.querySelector(".nav__movil");

btn.addEventListener('click', () => {
    nav1.classList.toggle('show');
});
});