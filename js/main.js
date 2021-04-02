

let burger_button = document.querySelector('.burger_button');

function checkDropMenu(media_check){

  if(media_check.matches){
    document.querySelector('.burger_menu').style.display = 'none';
    burger_button.addEventListener('click', dropMenu);
    burger_button.classList.remove('burger_button--active');
  }else{
    document.querySelector('.burger_menu').style.display = 'none';
  }
};

function dropMenu(){
  if(burger_button.classList.contains('burger_button--active')){
      document.querySelector('.burger_menu').style.display = 'none';
      burger_button.classList.remove('burger_button--active');
  }else{
      burger_button.classList.add('burger_button--active');
      document.querySelector('.burger_menu').style.display = 'block';
  }
};

let media_check = window.matchMedia("(max-width: 767px)");
checkDropMenu(media_check);
media_check.addListener(checkDropMenu);

let burger_links = document.querySelectorAll('.burger_link');

for(let burger_link of burger_links){
  burger_link.addEventListener('click',dropMenu)
};



window.onscroll = () => {
    const nav = document.querySelector('.nav');
    const distanceY = window.scrollY;

    if(distanceY > 200){
      nav.classList.add('nav_scroll')
    }else{
      nav.classList.remove('nav_scroll')
    }
}



let article_card = document.querySelector('.article_card_link');

article_card.addEventListener('click', event => {

  event.preventDefault();

  if(event.target.classList.contains('link_show')){
      document.querySelector('#last_card').classList.remove('article_card-hidden');
      event.target.classList.add('link_active')
      document.querySelector('.link_less').classList.remove('link_active')
      document.querySelector('.article_card_link').classList.add('article_card_link-active')
  }else if(event.target.classList.contains('link_less')){
      document.querySelector('#last_card').classList.add('article_card-hidden')
      event.target.classList.add('link_active')
      document.querySelector('.link_show').classList.remove('link_active')
      document.querySelector('.article_card_link').classList.remove('article_card_link-active')
  }

});


let changeStyle = document.querySelector('.banner_content-changeStyle a')

changeStyle.addEventListener('click', function(e){
  e.preventDefault();
   document.querySelector('.main_wrapp').classList.toggle('main_wrapp-white')
})


let el_audio = document.querySelector('.article_audio');
let playing = false;

let player = new Audio('audio/Beds_and_Beats_-_Cold_Treats_63435605.mp3');
player.preload = "auto";
player.addEventListener('ended', function(){
  playing = false;
});

el_audio.addEventListener('click', playPause);

function playPause(e) {
  e.preventDefault();

  if( playing) {
    player.pause(); 
    document.querySelector('.article_audio').classList.remove('article_audio-active')
  } else {
    player.play();
    document.querySelector('.article_audio').classList.add('article_audio-active')
  }
  playing = !playing;
}

// let el_audio = document.querySelector('.article_audio');
// el_audio.addEventListener('click', sound);

// function sound() {
//   var audio = new Audio(); // Создаём новый элемент Audio
//   audio.src = 'audio/Beds_and_Beats_-_Cold_Treats_63435605.mp3'; // Указываем путь к звуку "клика"
//   audio.autoplay = true; // Автоматически запускаем
// }