'use strict';

const inputSuga = document.querySelector('.input-suga');
const responseSuga = document.querySelector('.response-suga');
const btnSuga = document.querySelector('.btn-suga');
const imageSuga = document.querySelector('.img-suga');

function enterKeySuga (event) {
  if(event.keyCode === 13) {
    sugaResponse();
  }
}

window.addEventListener('keyup', enterKeySuga);

function emptyInputSuga () {
  inputSuga.value = '';
}

inputSuga.addEventListener('click', emptyInputSuga);

function sugaResponse () {
 if (inputSuga.value === 'guapo') {
  responseSuga.innerHTML = 'gracias';
  imageSuga.src = 'https://data.whicdn.com/images/269421446/large.jpg';
 } else if (inputSuga.value === 'feo') {
  responseSuga.innerHTML = ':(';
  imageSuga.src = 'https://i.pinimg.com/originals/22/74/50/22745073721d23e753608e45220ce03e.jpg';
 } else if (inputSuga.value === 'te quiero') {
  responseSuga.innerHTML = 'qué cosas más bonitas me dices...';
  imageSuga.src = 'https://i.pinimg.com/originals/9e/81/21/9e81218be2d86bc59b96c5a27203275d.jpg';
} else if (inputSuga.value === 'oppa') {
  responseSuga.innerHTML = 'aquí estoy, nena';
  imageSuga.src = 'https://pm1.narvii.com/7080/c2212cc70474d52c8da23be92a4c31ce40f5c7e1r1-930-1064v2_hq.jpg';
 } else if (inputSuga.value === 'me gustas') {
  responseSuga.innerHTML = 'A mí me gusta dormir';
  imageSuga.src = 'https://media1.tenor.com/images/84d52375628c50503a823bdbcdc770a9/tenor.gif?itemid=10839550';
} else if (inputSuga.value === '') {
  responseSuga.innerHTML = '';
  imageSuga.src = "https://vignette.wikia.nocookie.net/bangtanboys/images/a/a1/9af51f361bddfcb790ad2375fdc78f736128a8a9r1-2000-1333v2_00.jpg/revision/latest?cb=20190422191304"
} else {
  responseSuga.innerHTML = 'Perdona, no te he entendido';
  imageSuga.src = 'https://media1.tenor.com/images/2b829324ffcf0bc700fa822821fc1721/tenor.gif?itemid=13362677';
}
}

btnSuga.addEventListener('click', sugaResponse);