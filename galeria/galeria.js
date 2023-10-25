var imagen = document.querySelectorAll('.most-img')
var contMostrar = document.getElementById('mostrarCont');
var imgmostrar = document.getElementById('mostrada')

imagen.forEach(function(imagen){
    imagen.addEventListener('click',function(){
        contMostrar.classList.remove('mostrar-display-none');
        contMostrar.classList.add('mostrar-display-block');
        var mostrarimagen = imagen.cloneNode(true)
        imgmostrar.innerHTML = '';
        imgmostrar.appendChild(mostrarimagen);
    })
})

contMostrar.addEventListener('click',function(){
    contMostrar.classList.add('mostrar-display-none')
    contMostrar.classList.remove('mostrar-display-block')
})

