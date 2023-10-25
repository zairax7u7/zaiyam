var buttonPlay = document.getElementById('buttonPlay');
var buttonPlay2 = document.getElementById('buttonPlay2');
var rotarDisco = document.getElementById('rotarDisco');
var music1 = new Audio('../data/audios/musica_mc/nina_traviesa/nina_traviesa.mp3')


buttonPlay.addEventListener('click', function() {
  buttonPlay.classList.toggle('next__play-none')
  buttonPlay2.classList.toggle('next__play-none')
  rotarDisco.classList.toggle('center__disk-animation')
  let progres

  music1.play()
})

buttonPlay2.addEventListener('click',function(){
    buttonPlay2.classList.toggle('next__play-none')
    buttonPlay.classList.toggle('next__play-none')
    rotarDisco.classList.toggle('center__disk-animation')
    music1.pause()
})

music1.addEventListener('ended',function(){
    buttonPlay2.classList.add('next__play-none')
    buttonPlay.classList.remove('next__play-none')
    rotarDisco.classList.remove('center__disk-animation')
})
