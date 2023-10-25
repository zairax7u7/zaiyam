var eqiz = document.getElementById('eximg');
var header = document.getElementById('headerr');
var body = document.getElementById('body');
var hamburgesa = document.getElementById('hamburgesa')
var cerrarequiz = document.getElementById('log_out_id')
var cerrarbuton = document.getElementById('cerrarbutton')
var fondoblur = document.getElementById('log_out_ground')
var alertasalir = document.getElementById('log_out_fondo')
var perfil = document.getElementById('profile')
var menuflecha = document.getElementById('prinMain')


const div = document.createElement("div");
div.classList.add("background");

eqiz.addEventListener("click",function(){
    body.classList.remove('bodyoverflow')
    header.classList.remove("header--active");
    div.remove();
})

hamburgesa.addEventListener("click",function(){
    header.classList.add("header--active");
    body.classList.add('bodyoverflow')
    body.appendChild(div);
})

cerrarbuton.addEventListener("click",function(){
    window.location.href = '../index.html'
})
cerrarequiz.addEventListener("click",function(){
    fondoblur.style.display = 'none'
    alertasalir.style.display = 'none'
})

perfil.addEventListener("click",function(){
    fondoblur.style.display = 'block'
    alertasalir.style.display = 'block'
})