"use strict";

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#Usd');

inputRub.addEventListener('input', () => {
   const request = new XMLHttpRequest();

   request.open('GET', 'js/current.json');
});



