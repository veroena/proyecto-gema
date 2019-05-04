'use strict';

const inputTh = document.querySelector('.input-taehyung');
const responseTh = document.querySelector('.response-taehyung');
const btnTh = document.querySelector('.btn-taehyung');
const imageTh = document.querySelector('.img-taehyung');

function enterKeyTh (event) {
  if(event.keyCode === 13) {
    taehyungResponse();
  }
}

window.addEventListener('keyup', enterKeyTh);

function emptyInputTh () {
  inputTh.value = '';
}

inputTh.addEventListener('click', emptyInputTh);

function taehyungResponse () {
 if (inputTh.value === 'guapo') {
  responseTh.innerHTML = 'gracias';
  imageTh.src = 'https://ih1.redbubble.net/image.389838962.2121/poster%2C210x230%2Cf8f8f8-pad%2C210x230%2Cf8f8f8.lite-1u2.jpg';
 } else if (inputTh.value === 'feo') {
  responseTh.innerHTML = ':(';
  imageTh.src = 'https://i.pinimg.com/originals/b4/b0/cb/b4b0cb714782777ba608824574c69d09.jpg';
 } else if (inputTh.value === 'te quiero') {
  responseTh.innerHTML = 'Y yo a ti más!';
  imageTh.src = 'https://pbs.twimg.com/profile_images/712357048130732032/7ApwtdNR_400x400.jpg';
} else if (inputTh.value === 'oppa') {
  responseTh.innerHTML = 'yeah, baby';
  imageTh.src = 'https://media1.tenor.com/images/266595317069336a3bdf30f14ede132a/tenor.gif?itemid=9926506';
 } else if (inputTh.value === 'me gustas') {
  responseTh.innerHTML = 'A mí me gustan los perros';
  imageTh.src = 'https://i.pinimg.com/originals/d7/61/ed/d761ed12b543e530cc9efd2fa08eee12.jpg';
} else if (inputTh.value === '') {
  responseTh.innerHTML = '';
  imageTh.src = "https://6.viki.io/image/be9df661be1b4b6db1d0cdcadf08e571.jpeg?x=b&a=0x0&s=460x268&e=t&f=t&cb=1"
} else {
  responseTh.innerHTML = 'Perdona, no te he entendido';
  imageTh.src = 'https://66.media.tumblr.com/043d24981c982dabb726d20168151bf9/tumblr_oxapqf3sfM1so16ndo2_r2_400.gif';
}
}

btnTh.addEventListener('click', taehyungResponse);