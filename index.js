const verpass = document.getElementById('verpass');
const cor = document.getElementById('inptcorreo');
const pas = document.getElementById('inptcont');
const loginn = document.getElementById('intt');
const drw = 'toby4ever'
const usr = 'profemelly@gmail.com'

cor.addEventListener("click",function(){
    cor.classList.remove('inpteditback')
})

pas.addEventListener("click",function(){
    pas.classList.remove('inpteditback')
})

loginn.addEventListener("click",function(){
    if(cor.value === usr && pas.value === drw){
        window.location.href = './home/home.html'
    }else if(pas.value == '' && cor.value == ''){
        pas.type = 'text'
        pas.value = ''
        pas.classList.add('inpteditback')
        setTimeout(function(){
            pas.type = 'password'
            pas.value = ''
            pas.placeholder = 'No ingreso ningun valor';
            verpass.style.display = 'none'
        },1);
        cor.classList.add('inpteditback')
        cor.value = '';
        cor.placeholder = 'No ingreso ningun valor';
        verpass.style.display = 'none'
    }
    else if(cor.value == ''){
        cor.classList.add('inpteditback')
        cor.value = ''
        cor.placeholder = 'No ingreso ningun valor';
    }else if(pas.value == ''){
        pas.type = 'text'
        pas.value = ''
        pas.classList.add('inpteditback')
        setTimeout(function(){
            pas.type = 'password'
            pas.value = ''
            pas.placeholder = 'No ingreso ningun valor';
            verpass.style.display = 'none'
        },1);
    }else if(cor.value !== usr && pas.value === drw){
        cor.value = ''
        cor.placeholder = 'Correo incorrecto';
        cor.classList.add('inpteditback')

    }else if (cor.value === usr && pas.value !== drw){
        pas.type = 'text'
        pas.value = ''
        pas.classList.add('inpteditback')
        setTimeout(function(){
            pas.type = 'password'
            pas.value = ''
            pas.placeholder = 'contraseña incorrecta';
            verpass.style.display = 'none'
        },1);
    }else if(cor.value !== usr && pas.value !== drw){
        pas.classList.add('inpteditback')
        cor.classList.add('inpteditback')
        cor.value = ''
        cor.placeholder = 'Correo incorrecto';
        pas.type = 'text'
        pas.value = ''
        verpass.style.display = 'none'
        setTimeout(function(){
            pas.type = 'password'
            pas.value = ''
            pas.placeholder = 'contraseña incorrecta';
            verpass.style.display = 'none'
        },1);
    }
})


pas.addEventListener('input',function(){
    if(pas.value.trim() === ''){
        verpass.style.display = 'none';
    }else{
        verpass.classList.remove('passwver_display')
        verpass.style.display = 'block'
    }
})

verpass.addEventListener("click",function(){
    if(pas.type === 'password'){
        pas.type = 'text'
        verpass.src = './data/imagenes/index_img/vista.png'
    }else{
        pas.type = 'password'
        verpass.src = './data/imagenes/index_img/esconder.png'
    }
})



var elim = document.querySelector('.page-header-headings')
elim.remove();