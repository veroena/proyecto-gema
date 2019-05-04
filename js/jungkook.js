'use strict';

const inputJk = document.querySelector('.input-jk');
const responseJk = document.querySelector('.response-jk');
const btnJk = document.querySelector('.btn-jk');
const imageJk = document.querySelector('.img-jk');

function enterKeyJk (event) {
  if(event.keyCode === 13) {
    jkResponse();
  }
}

window.addEventListener('keyup', enterKeyJk);

function emptyInputJk () {
  inputJk.value = '';
}

inputJk.addEventListener('click', emptyInputJk);

function jkResponse () {
 if (inputJk.value === 'guapo') {
  responseJk.innerHTML = 'gracias';
  imageJk.src = 'https://a.wattpad.com/cover/112829112-352-k631846.jpg';
 } else if (inputJk.value === 'feo') {
  responseJk.innerHTML = ':(';
  imageJk.src = 'https://pm1.narvii.com/6428/c85f6a59a765fb07b16008df681408b2ddb93d92_hq.jpg';
 } else if (inputJk.value === 'te quiero') {
  responseJk.innerHTML = 'Yo a ti más, ¿no lo sabías?';
  imageJk.src = 'https://ih1.redbubble.net/image.639771125.8146/flat,550x550,075,f.u4.jpg';
} else if (inputJk.value === 'oppa') {
  responseJk.innerHTML = 'No me llames así, por fa.';
  imageJk.src = 'https://i.pinimg.com/originals/06/23/cb/0623cbe59c1ed9a787049940118bbd13.gif';
 } else if (inputJk.value === 'me gustas') {
  responseJk.innerHTML = 'A mí me gusta Blackpink';
  imageJk.src = 'https://images-na.ssl-images-amazon.com/images/I/71HZtunoc%2BL._SX425_.jpg';
} else if (inputJk.value === '') {
  responseJk.innerHTML = '';
  imageJk.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS73jTo47A_ANPj1mGsHBv4yKsd8vmLzM35afsCsu_3Lj_spz3rxg"
} else {
  responseJk.innerHTML = 'Perdona, no te he entendido';
  imageJk.src = 'https://pbs.twimg.com/media/CofV5vHUAAADEDL.jpg';
}
}

btnJk.addEventListener('click', jkResponse);