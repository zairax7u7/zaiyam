 var cheast = document.getElementById('cheast');
 var button = document.getElementById('button');
 var buttonFather = document.getElementById('buttonFather');
 var grieta = document.getElementById('grieta');
 var cheastopen = document.getElementById('cheastopen');
 var pergamino = document.getElementById('pergamino');
 var boxletters = document.getElementById('boxletters');
 var opatiofletters = document.getElementById('perletters');
 var opatiofletters2 = document.getElementById('perletters2');
 var boxex = document.getElementById('boxex');
 var boxeximg = document.getElementById('boximg');
 var audioBoton = new Audio('../data/audios/fraces_au/boton.mp3')
 var audioBaulcallendo = new Audio('../data/audios/fraces_au/callendo.mp3')
 var audioBaulabierto = new Audio('../data/audios/fraces_au/baulabierto.mp3')
 var audiopergamino = new Audio('../data/audios/fraces_au/pergamino.mp3')
 var audiobrillo = new Audio('../data/audios/fraces_au/brillo.mp3')

 button.addEventListener("click",function(){
    setTimeout(() => {
        audioBoton.play();
    },1);
    setTimeout(() => {
        audioBaulcallendo.play();
    },1000);
    setTimeout(() =>{
        buttonFather.remove();
    },600);
    setTimeout(() => {
        cheast.classList.remove('box_cheast-amin')
        cheast.classList.add('box_cheast')
    },800);
    setTimeout(() =>{
        grieta.classList.remove('box_grieta_display')
        grieta.classList.add('box_grieta_display_block')
    },1200);

 })
 
 cheastopen.addEventListener("click",function(){
    setTimeout(() => {
        audioBaulabierto.play();
    },1);
    setTimeout(() =>{
        cheastopen.src = '../data/imagenes/fraces_img/ABIERTO.png'
        audiopergamino.play();
    },500)
   tambalear = null;
 })

 cheastopen.addEventListener("click",function(){
    setTimeout(() =>{
        pergamino.classList.remove('box_pergamino-display')
        pergamino.classList.add('box_grieta_display_block')
   },1500)
   setTimeout(() =>{
        audiobrillo.play();
        pergamino.classList.add('box_pergamino-anim')
   },1700)

   setTimeout(() =>{
        boxletters.classList.remove('letters_display_none')
        var datos = [
            { frase: "Cuando todo parezca ir en tu contra, recuerda que el avión despega contra el viento", autor: `"Mark Zuckerberg."` },

            { frase: "Si sé lo que es el amor, es gracias a ti", autor: `"Herman Hesse."` },

            { frase: "Te quiero, no por quien eres, sino por quien soy cuando estoy contigo", autor: `"Gabriel García."` },

            { frase: "Solo hay dos momentos en que quiero estar contigo: Ahora y para Siempre", autor: `"Anonimo."` },

            { frase: "Eres lo único que veo entre la niebla, lo único que vale la pena", autor: `"Leiva."` },

            { frase: "Te quería decir que me gustas, pero siendo honestos: me encantas.", autor: `"Anonimo."` },

            { frase: "Te amaría de cualquier forma, en cualquier mundo, con cualquier pasado.", autor: `"Anonimo."` },

            { frase: "Tus ojos tienen la luz que le hace falta a mi alma.", autor: `"Ángela Aguilar"` },

            { frase: "Si con un beso pudiera demostrar mi amor te estaría besando siempre.", autor: `"Anonimo."` },

            { frase: "Amar es encontrar la única persona que completa tu corazón", autor: `"Julia Quinn."` },

            { frase: "Qué cosa más bonita es verte, mientras me ves, viéndote a ti.", autor: `"José Urbano."` },

            { frase: "Y cuando me besa, sostiene mi cara con ambas manos como si fuese la luna.", autor: `"Ron Israel."` },

            { frase: "Te amo con todo lo que tengo, lo que soy y lo que siento.", autor: `"zairax jeje."` },

            { frase: "El más poderoso hechizo para ser amado es amar.", autor: `"Baltasar Gracián."` },

            { frase: "Y mira tú, andaba buscando una estrella y encontré una galaxia.", autor: `"Ron Israel."` },

            { frase: "Tú eres siempre la respuesta cuando me preguntan que estoy pensando.", autor: `"Anonimo."` },

            { frase: "No creo que el amor sea ciego porque ha sido mirarte y volverme loco por ti.", autor: `"Anonimo."` },

            { frase: "Ven a dormir conmigo. No haremos el amor, el amor nos hará.", autor: `"Julio Cortázar."` },

            { frase: "Te miraré cada día como se mira el mar por primera vez.", autor: `"Nerea Delgado."` },

            { frase: "El curso del amor verdadero nunca fue fácil.", autor: `"William Shakespeare."` },
// ---------------------------------------------part 2--------------------------------------------------------------

            { frase: "La vida es una aventura que tenemos el privilegio de disfrutar.", autor: `"Anonimo"` },

            { frase: "Somos lo que pensamos. Nos convertimos en nuestros pensamientos", autor: `"Buda"` },
            
            { frase: "Es simple: solo haz que ocurra.", autor: `"Didier Diderot"` },
            
            { frase: "Hoy es el primer día del resto de tu vida", autor: `"Abbie Hoffman"` },
            
            { frase: "Aprende de los errores de los demás. No vivirás bastante para cometerlos todos.", autor: `"Groucho Marx"` },
            
            { frase: "La vida es una aventura atrevida o no es nada", autor: `"Helen Keller"` },
            
            { frase: "El sentido de la vida es tener valores, no cosas de valor.", autor: `"Anonimo"` },
            
            { frase: "Comenzar tu día con una sonrisa hará que tu destino se pinte de colores.", autor: `"Bob Marley"` },
            
            { frase: "“La vida no trata de encontrarse a uno mismo, sino de crearse a uno mismo.", autor: `"George Bernard"` },
            
            { frase: "Éste es el secreto de la felicidad y la virtud: amar lo que uno tiene que hacer", autor: `"mundo feliz"` },
            
            { frase: "Haz de cada día tu obra maestra.", autor: `"John Wooden"` },
            
            { frase: "Por muy corto que sea el camino. Quien pisa fuerte, ¡deja huella!", autor: `"Animo"` },
            
            { frase: "Si el camino es bello, no preguntemos a dónde va.", autor: `"Anatole France"` },
            
            { frase: "No sueñes tu vida, vive tu sueño.", autor: `"Anonimo"` },
            
            { frase: "Hay un punto de luz en cada nube de tormenta.", autor: `"Bruce Beresford"` },
            
            { frase: "La felicidad es una dirección, no un lugar.", autor: `"Sydney S."` },
            
            { frase: "La mejor venganza es el éxito.", autor: `"Anonimo"` },
            
            { frase: "Hay una forma de belleza en la imperfección", autor: `"Conrad Hall"` },
            
            { frase: "Cada flor es un alma brotando en la naturaleza.", autor: `" Gerard de Nerval"` },
            
            { frase: "Al que madruga... ¡Todo el día le da sueño!", autor: `"Anonimo"` },
            
            { frase: "O me levanto temprano o me levanto amable. ¡No puedo con todo!", autor: `"Anonimo"` },
            
            { frase: "Hoy es un nuevo día. Incluso si lo hiciste mal ayer, hoy lo puedes hacer bien.", autor: `"Dwigth Howard"` },
            
            { frase: "Va a ser un gran día. Solo tienes que creerlo.", autor: `"Anonimo"` },
            
            { frase: "La vida es buena y con un café es aún mejor.", autor: `"Anonimo"` },
            
            { frase: "Si no sabes para dónde vas, cualquier camino te llevará allí.", autor: `"Lewis Carroll"` },
            
            { frase: "Una persona es tan buena como lo sea su palabra.", autor: `"La ladrona"` },
            
            { frase: "No puedes jugar a ser dios, sin conocer bien al demonio.", autor: `"Anonimo"` },
            
            { frase: "Pero a veces hacer lo incorrecto también era correcto.", autor: `"Big Little"` },
            
            { frase: "Las mejores cosas de la vida, engordan.", autor: `"Anonimo"` },
            
            { frase: "El que no cree en la magia nunca la encontrará.", autor: `"Matilda"` },
            
            { frase: "Es inútil creer lo que ves, si solo ves lo que crees.", autor: `"La élite"` },
            
            { frase: "Que lo que quieres no haga que se te olvide lo que mereces.", autor: `"Sofía"` },
            
            { frase: "Librarse de todo lo desagradable en lugar de aprender a soportarlo", autor: `"Mundo Feliz"` },
            
            { frase: "Hay lugares donde uno se queda y lugares que quedan en uno", autor: `"Marcel Proust"` },
            
            { frase: "A veces se gana, otras, se aprende.", autor: `"Anonimo"` },
            
            { frase: "El único modo de hacer un gran trabajo es amar lo que haces", autor: `"Steve Jobs"` },
            
            { frase: "El dinero no es la clave del éxito; la libertad para poder crear lo es ", autor: `"Nelson Mandela"` },
            
            { frase: "El trabajo duro hace que desaparezcan las arrugas de la mente y el espíritu", autor: `"Helena Rubinstein "` },
            
            { frase: "Escoge un trabajo que te guste, y nunca tendrás que trabajar ni un solo día de tu vida ", autor: `"Confusio"` },
            
            { frase: "Cuéntamelo y me olvidaré. enséñamelo y lo recordaré. involúcrame y lo aprenderé", autor: `"Benjamin Franklin "` },
            
            { frase: "La lógica te llevará de la a a la z. la imaginación te llevará a cualquier lugar ", autor: `"Albert Einstein"` },
            
            { frase: "A veces la adversidad es lo que necesitas encarar para ser exitoso", autor: `"Zig Ziglar"` },
            
            { frase: "Para tener éxito tu deseo de alcanzarlo debe ser mayor que tu miedo al fracaso", autor: `"Bill Cosby"` },
            
            { frase: "Ejecuta tus conocimientos con la maestría del que sigue aprendiendo", autor: `"onathan García"` },
            
            { frase: "Cuando pierdas, no pierdas la lección", autor: `"Dalai Lama "` },
            
            { frase: "No busques los errores, busca un remedio", autor: `"Henry Ford"` },
            
            { frase: "La vida es una aventura, atrévete", autor: `"Henry Ford"` },
            
            { frase: "Tu actitud, no tu aptitud, determinará tu altitud", autor: `"Zig Ziglar"` },
            
            { frase: "Tienes que hacer las cosas que crees que no puedes hacer ", autor: `"Eleanor Roosevelt"` },
            
            { frase: "Si te caíste ayer, levántate hoy", autor: `"H. G. Wells"` },
            
            { frase: "Siempre parece imposible... hasta que se hace", autor: `"Nelson Mandela"` },
            
            { frase: "Si no pierdes, no puedes disfrutar de las victorias", autor: `"Rafael Nadal"` },
            
            { frase: "No dejes que el miedo se interponga en tu camino", autor: `"Babe Ruth"` },

            { frase: "No cuentes los días, haz que los días cuenten ", autor: `"Muhammad Ali"` },
            
            { frase: "El mejor momento del día es ahora", autor: `"Pierre Bonnard"` },
            
            { frase: "Si la oportunidad no llama, construye una puerta", autor: `"Milton Berle"` },
            
            { frase: "Deja que cada hombre ejerza el arte que domina", autor: `"Aristofanos"` },
            
            { frase: "El valor de una idea radica en su uso", autor: `"Tomas Edison"` },
            
            { frase: "Piensa, sueña, cree y atrévete ", autor: `"Walt Disney"` },
            
            { frase: "Los obstáculos son esas cosas atemorizantes que ves cuando apartas los ojos de tu meta", autor: `"Henry Ford"` },
            
            { frase: "Asegúrate de que colocas tus pies en el lugar correcto, y luego mantente firme", autor: `"Abraham Lincoln"` },
            
            { frase: "La mejor manera para empezar es callándote y empezar a hacer", autor: `"Walt Disney"` },
            
            { frase: "Si te caes siete veces, levántate ocho", autor: `"Proverbio chino"` },
            
            { frase: "Tienes que esperar cosas de ti mismo antes de poder hacerlas", autor: `"Michael Jordan"` },
            
            { frase: "Transforma tus heridas en sabiduría", autor: `"Oprah Winfrey"` },
            
            { frase: "La edad no es barrera. Es una limitación que pones en tu mente", autor: `"Joyner-Kersee"` },
            
            { frase: "El universo no conspira contra ti, pero tampoco se desvía para alinear tu camino", autor: `"Tim Ferriss"` },
            
            { frase: "Con autodisciplina casi todo es posible", autor: `"heodore Roosevelt"` },
            
            { frase: "La innovación distingue al líder del seguidor", autor: `"Steve Jobs"` },
            
            { frase: "Si puedes soñarlo, puedes hacerlo", autor: `"Walt Disney"` },
            
              {
                frase: "Tu nueva frase aquí",
                autor: `"Nombre del autor de la frase"`
              },
            
              {
                frase: "No importa cuántas veces te caigas, lo importante es cuántas veces te levantes.",
                autor: `"Autor Desconocido"`
              },

              {
                frase: "La vida es una obra de arte, no una competencia.",
                autor: `"Oscar Wilde"`
              },
              {
                frase: "El éxito es aprender a levantarse cuando te caes.",
                autor: `"Autor Desconocido"`
              },
              {
                frase: "El amor es la respuesta, pero mientras tanto, la música es una buena terapia.",
                autor: `"John Lennon"`
              },
              {
                frase: "No hay caminos para la paz; la paz es el camino.",
                autor: `"Mahatma Gandhi"`
              },
              {
                frase: "Haz el amor y no la guerra.",
                autor: `"John Lennon"`
              },

              {
                frase: "La vida es una sucesión de oportunidades para ser feliz.",
                autor: `"Dalai Lama"`
              },
              {
                frase: "La felicidad no es algo listo hecho. Viene de tus propias acciones.",
                autor: `"Dalai Lama"`
              },

              {
                frase: "El amor es una fuerza más poderosa que cualquier otra en el universo.",
                autor: `"Mahatma Gandhi"`
              },
              {
                frase: "La vida es un viaje, no un destino.",
                autor: `"Albert Einstein"`
              },
              {
                frase: "La educación es la llave para salir de la pobreza.",
                autor: `"Nelson Mandela"`
              },

              {
                frase: "La vida es demasiado corta para ser pequeña.",
                autor: `"Oscar Wilde"`
              },
              {
                frase: "La única manera de hacer un gran trabajo es amar lo que haces.",
                autor: `"Steve Jobs"`
              },
              {
                frase: "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito.",
                autor: `"Albert Schweitzer"`
              },
              {
                frase: "El hombre es lo que sus pensamientos hacen de él.",
                autor: `"Marco Aurelio"`
              },
              {
                frase: "La vida no es lo que te sucede, sino cómo respondes a lo que te sucede.",
                autor: `"Viktor Frankl"`
              },

              {
                frase: "La vida es una aventura atrevida o nada en absoluto.",
                autor: `"Helen Keller"`
              },
              {
                frase: "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
                autor: `"Robert Collier"`
              },
              {
                frase: "El fracaso no es fatal, pero desistir es.",
                autor: `"Winston Churchill"`
              },
              {
                frase: "No hay nada imposible para el hombre que tenga la voluntad de intentarlo.",
                autor: `"Napoleon Bonaparte"`
              },
              {
                frase: "El futuro pertenece a quienes creen en la belleza de sus sueños.",
                autor: `"Eleanor Roosevelt"`
              },
              {
                frase: "La felicidad no es algo que está listo hecho. Viene de tus propias acciones.",
                autor: `"Dalai Lama"`
              },
              {
                frase: "El amor es la fuerza más poderosa de la tierra.",
                autor: `"Mahatma Gandhi"`
              },
              {
                frase: "La vida es muy corta para ser pequeña.",
                autor: `"Oscar Wilde"`
              },

              {
                frase: "La mejor manera de predecir el futuro es crearlo.",
                autor: `"Abraham Lincoln"`
              },
              {
                frase: "La vida es una oportunidad, aprovéchala.",
                autor: `"George Bernard Shaw"`
              },
              {
                frase: "La vida es una aventura, emprendela.",
                autor: `"Mark Twain"`
              },
              {
                frase: "La vida es una obra de arte, creala.",
                autor: `"Unknown"`
              },
              {
                frase: "La vida es un regalo, disfrútala.",
                autor: `"Unknown"`
              },
              {
                frase: "La vida es un viaje, disfrutalo.",
                autor: `"Unknown"`
              },
              {
                frase: "La vida es un desafío, acéptalo.",
                autor: `"Unknown"`
              },
              {
                frase: "La vida no es lo que te sucede, sino cómo respondes a lo que te sucede.",
                autor: `"Viktor Frankl"`
              },
              {
                frase: "No hay nada imposible para el hombre que tenga la voluntad de intentarlo.",
                autor: `"Napoleón Bonaparte"`
              },
              {
                frase: "El futuro pertenece a quienes creen en la belleza de sus sueños.",
                autor: `"Eleanor Roosevelt"`
              },
              {
                frase: "La vida es una aventura atrevida o nada en absoluto.",
                autor: `"Helen Keller"`
              },
              {
                frase: "El amor es la fuerza más poderosa de la tierra.",
                autor: `"Mahatma Gandhi"`
              },
              {
                frase: "La vida es una obra de arte, creala.",
                autor: `"Desconocido"`
              },
              {
                frase: "La vida es un regalo, disfrútala.",
                autor: `"Desconocido"`
              },
              {
                frase: "La vida es un viaje, disfrutalo.",
                autor: `"Desconocido"`
              },
              {
                frase: "La vida es un desafío, acéptalo.",
                autor: `"Desconocido"`
              },
              {
                frase: "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
                autor: `"Robert Collier"`
              },
              {
                frase: "El fracaso no es fatal, pero desistir es.",
                autor: `"Winston Churchill"`
              },
              {
                frase: "El tiempo es la única moneda que no puedes ganar o ahorrar, pero puedes gastar sabiamente.",
                autor: `"Carl Sandburg"`
              },
              {
                frase: "La mejor manera de predecir el futuro es crearlo.",
                autor: `"Abraham Lincoln"`
              },
              {
                frase: "La vida es una oportunidad, aprovéchala.",
                autor: `"George Bernard Shaw"`
              },
              {
                frase: "La vida es una aventura, emprendela.",
                autor: `"Mark Twain"`
              },
              {
                frase: "La vida no es lo que te sucede, sino cómo respondes a lo que te sucede.",
                autor: `"Viktor Frankl"`
              },
              {
                frase: "No hay nada imposible para el hombre que tenga la voluntad de intentarlo.",
                autor: `"Napoleón Bonaparte"`
              },
              {
                frase: "El futuro pertenece a quienes creen en la belleza de sus sueños.",
                autor: `"Eleanor Roosevelt"`
              },
              {
                frase: "La vida es una aventura atrevida o nada en absoluto.",
                autor: `"Helen Keller"`
              },
              {
                frase: "El amor es la fuerza más poderosa de la tierra.",
                autor: `"Mahatma Gandhi"`
              },
              {
                frase: "La vida es una obra de arte, creala.",
                autor: `"Desconocido"`
              },
              {
                frase: "La vida es un regalo, disfrútala.",
                autor: `"Desconocido"`
              },
              {
                frase: "La vida es un viaje, disfrutalo.",
                autor: `"Desconocido"`
              },
              {
                frase: "La vida es un desafío, acéptalo.",
                autor: `"Desconocido"`
              },
              {
                frase: "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
                autor: `"Robert Collier"`
              },
              {
                frase: "El fracaso no es fatal, pero desistir es.",
                autor: `"Winston Churchill"`
              },
              {
                frase: "La mejor manera de predecir el futuro es crearlo.",
                autor: `"Abraham Lincoln"`
              },
              {
                frase: "La vida es una oportunidad, aprovéchala.",
                autor: `"George Bernard Shaw"`
              },
              {
                frase: "La vida es una aventura, emprendela.",
                "autor": `"Mark Twain"`
              },
              {
                frase: "Los sueños son la fuente de la inspiración y el progreso.",
                autor: `"Bard"`
              },
              {
                frase: "La creatividad es el motor del cambio.",
                autor: `"Bard"`
              },
              {
                frase: "La compasión es el pegamento que une a la humanidad.",
                autor: `"Bard"`
              },
              {
                frase: "La vida no es lo que te sucede, sino cómo respondes a lo que te sucede.",
                autor: `"Viktor Frankl"`
              },
              {
                frase: "No hay nada imposible para el hombre que tenga la voluntad de intentarlo.",
                autor: `"Napoleón Bonaparte"`
              },
              {
                frase: "El futuro pertenece a quienes creen en la belleza de sus sueños.",
                autor: `"Eleanor Roosevelt"`
              },
              {
                frase: "La vida es una aventura atrevida o nada en absoluto.",
                autor: `"Helen Keller"`
              },
              {
                frase: "El amor es la fuerza más poderosa de la tierra.",
                autor: `"Mahatma Gandhi"`
              },
              {
                frase: "La vida es una obra de arte, creala.",
                autor: `"Desconocido"`
              },
              {
                frase: "La vida es un regalo, disfrútala.",
                autor: `"Desconocido"`
              },
              {
                frase: "La vida es un viaje, disfrutalo.",
                autor: `"Desconocido"`
              },
              {
                frase: "La vida es un desafío, acéptalo.",
                autor: `"Desconocido"`
              },
              {
                frase: "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
                autor: `"Robert Collier"`
              },
              {
                frase: "El fracaso no es fatal, pero desistir es.",
                autor: `"Winston Churchill"`
              },
              {
                frase: "La mejor manera de predecir el futuro es crearlo.",
                autor: `"Abraham Lincoln"`
              },
              {
                frase: "La vida es una oportunidad, aprovéchala.",
                autor: `"George Bernard Shaw"`
              },
              {
                frase: "La vida es una aventura, emprendela.",
                autor: `"Mark Twain"`
              },
              {
                frase: "Los sueños son la fuente de la inspiración y el progreso.",
                autor: `"Bard"`
              },
              {
                frase: "La creatividad es el motor del cambio.",
                autor: `"Bard"`
              },
              {
                frase: "La compasión es el pegamento que une a la humanidad.",
                autor: `"Bard"`
              },
              {
                frase: "No hay nada más poderoso que el amor.",
                autor: `"Bard"`
              },
              {
                frase: "La esperanza es lo último que muere.",
                autor: `"Bard"`
              },
              {
                frase: "El perdón es el camino a la libertad.",
                autor: `"Bard"`
              },
              {
                frase: "La bondad siempre triunfa sobre la maldad.",
                autor: `"Bard"`
              },
              {
                frase: "La vida es demasiado corta para vivirla con miedo.",
                autor: `"Bard"`
              },
              {
                frase: "Sé tú mismo, no importa lo que piensen los demás.",
                autor: `"Bard"`
              },
              {
                frase: "Sigue tus sueños, no importa lo difícil que parezca.",
                autor: `"Bard"`
              },
              {
                frase: "Haz del mundo un lugar mejor.",
                autor: `"Bard"`
              }
          ];
          
          function obtenerFraseAleatoria() {
            var indiceAleatorio = Math.floor(Math.random() * datos.length);
            return datos[indiceAleatorio];
          }
          
          var fraseYAutor = obtenerFraseAleatoria();
          opatiofletters.textContent = (fraseYAutor.frase)
          opatiofletters2.textContent = (fraseYAutor.autor)
   },3000)

   setTimeout(() =>{
        opatiofletters.style.opacity = '1'
        opatiofletters2.style.opacity = '1'
   },3500)

   setTimeout(() => {
        boxex.classList.remove('box_ex_none')
        boxex.classList.add('box_ex_block')
   },4000)
 })


function tambalear() {
    cheast.style.left = '49%';
    setTimeout(function() {
        cheast.style.left = '51%';
        setTimeout(function() {
            cheast.style.left = '49%';
            setTimeout(function() {
                cheast.style.left = '51%';
                tambalear();
            }, 500);
        }, 500);
    }, 500);
} 

setTimeout(tambalear, 2300)

boxex.addEventListener('click',function(){
    setTimeout(()=>{
        audiopergamino.play();
        opatiofletters.classList.remove('pergamino_div_p_')
        opatiofletters2.classList.remove('pergamino_div_p_')
    },1)
    setTimeout(()=>{
        opatiofletters.classList.add('pergamino_div_p')
        opatiofletters2.classList.add('pergamino_div_p')
    },2)
    setTimeout (() =>{
        opatiofletters.style.opacity = '0'
        opatiofletters2.style.opacity = '0'
    },500)
    setTimeout (() =>{
        boxex.classList.remove('box_ex_block')
        boxex.classList.add('box_ex_none')
        boxletters.classList.add('letters_display_none')
    },2000)
    setTimeout (() =>{
        pergamino.classList.remove('box_pergamino')
        pergamino.classList.remove('box_pergamino-anim')
        pergamino.classList.add('anti_box_pergamino-anim')
        pergamino.classList.add('anti_box_pergamino')
    },2100)
    setTimeout (() =>{
        pergamino.classList.add('box_pergamino-display')
        pergamino.style.display = 'none'
    },3051)
    setTimeout (() =>{
        audioBaulabierto.play();
        cheastopen.src = '../data/imagenes/fraces_img/CERRADO.png'
    },3060)
    setTimeout (() =>{
        window.location.replace(window.location.href);
    },3600)
})

