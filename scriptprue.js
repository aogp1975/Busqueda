// Hora al abrir la página
let horaActual = 16; // 4:00pm

//Función para obtener la hora
function obtenerHoraActual() {
  const ahora = new Date();
  return ahora.getHours();
}

// Botones para ajustar la hora y en donde está el sonido
function ajustarHora(aumentar) {
  const sonbot = document.getElementById("audiobtns");
  if (aumentar) {
    horaActual = (horaActual + 1) % 24;
  } else {
    horaActual = (horaActual - 1 + 24) % 24;
  }

  if (horaActual >= 8 && horaActual < 17) {
    horaActual = 16; 
  }

  document.getElementById('hora').innerText = `${horaActual.toString().padStart(2, '0')}:00`;
  sonbot.play();
}
//ocultar ventanas
window.onload = function() {
  const ventanas = document.querySelectorAll('.ventana');
  ventanas.forEach(ventana => {
    ventana.style.display = 'none';
  });
};

// Función para mostrar una ventana específica
function mostrarVentana(idVentana) {
  const ventana = document.getElementById(idVentana);
  ventana.style.display = 'block';
}
//Aquí cambiamos el contenido de las ventanas
function cambiarContenidoVentanas() {
  const sonire = document.getElementById("audioir");
  document.getElementById('contenido-16').innerHTML = '';
  document.getElementById('contenido-17').innerHTML = '';
  document.getElementById('contenido-18').innerHTML = '';
  document.getElementById('contenido-19').innerHTML = '';
  document.getElementById('contenido-20').innerHTML = '';
  document.getElementById('contenido-21').innerHTML = '';
  document.getElementById('contenido-22').innerHTML = '';
  document.getElementById('contenido-23').innerHTML = '';
  document.getElementById('contenido-24').innerHTML = '';
  document.getElementById('contenido-1').innerHTML = '';
  document.getElementById('contenido-2').innerHTML = '';
  document.getElementById('contenido-3').innerHTML = '';
  document.getElementById('contenido-4').innerHTML = '';
  document.getElementById('contenido-5').innerHTML = '';
  document.getElementById('contenido-6').innerHTML = '';
  document.getElementById('contenido-7').innerHTML = '';
  document.getElementById('contenido-16b').innerHTML = '';
  document.getElementById('contenido-17b').innerHTML = '';
  document.getElementById('contenido-16c').innerHTML = '';
  document.getElementById('contenido-17c').innerHTML = '';

  if (horaActual == 16) {
    document.getElementById('contenido-16').innerHTML = '<h2> <img class=imgmam src="mam16.jpg">  </h2>';
    document.getElementById('contenido-16b').innerHTML = '<h2 id = "textoescrito"> -Ya casi, sí vamos a terminar temprano el proyecto.- <br> Llevábamos todo el día trabajando y ya nos queríamos ir. <br> Yo tenía que llegar antes de las 6 a casa y me tardo al menos una hora entre los camiones que tengo que tomar. <br> Habíamos dejado todo para el último momento porque, según nosotros, el proyecto era rápido y podíamos aprovechar mejor el tiempo para convivir entre nosotros. </h2>';
    document.getElementById('contenido-16c').innerHTML = '<h2> -Yo les dije que lo hiciéramos desde la semana pasada- <br> Yo no tenía prisa por acabar el proyecto, pero mis amigas sí, siempre hacíamos los trabajos entre nosotros y siempre dejábamos todo para el final. </h2>';
  }
  else if (horaActual == 17) {
    document.getElementById('contenido-17').innerHTML = '<h2> <img id=img17a src="mam17.jpg" onclick = "cambioimg()"> <img id=img17b src="mam17b.jpg" style="display: none;"></h2>';
    document.getElementById('contenido-17b').innerHTML = '<h2>  Nos habíamos tardado más de lo que planeamos, pero no había problema porque ya me había hablado mi mamá diciendo que mejor me regresara en taxi para que estuviera más tranquila y poder llegar a una salida que teníamos planeada, que ella lo pagaba al llegar. <br> Luna me había ofrecido quedarme en su casa pero quería llegar con mi gato porque no lo había visto en todo el día y luego se pone ansioso. </h2>';
    document.getElementById('contenido-17c').innerHTML = '<h2> -Mejor quédate en mi casa- Le dijo Luna a Amanda, pero Amanda empezó a decir que se quería ir con su gato y con su mamá porque por la noche iban a salir. <br> entendíamos que era peligroso que se fuera en el autobús porque además habían aumentado los asaltos por la ruta que ella tomaba. </h2>';
  }
  else if (horaActual == 18) {
    document.getElementById('contenido-17').innerHTML = '<h2> Le dije a Amanda que se viniera en taxi, era más seguro que tomar el camión y llegaría más rápido. <br> Ya estaba por anochecer y no me gustaba que se viniera sola. </h2>';
    document.getElementById('contenido-17b').innerHTML = '<h2> Mientras caminábamos a la parada donde había camiones y taxis, nos reíamos de algo que nos pasó en la mañana. <br> -Ay, ya casi no tengo pila.- dijo Luna, nunca tenía pila y siempre nos preocupaba a Armando y a mí porque se tardaba en contestar cuando, en el grupo que teníamos, preguntábamos si ya había llegado a su casa, era foránea y como no tiene familia cerca sentíamos que lo mejor era estar al pendiente de ella, últimamente había muchas <a href="https://www.elsoldetoluca.com.mx/policiaca/localizan-sin-vida-a-estudiante-que-era-buscada-en-lerma-9273425.html" target = "_blank">noticias de chicas desaparecidas en el área.</a> <br> -Yo tengo que hacer unas cosas en el centro, te acompaño a tu casa y de ahí me voy.- Le dijo Armando, al menos así íbamos a estar tranquilos de que llegó con bien a su casa. <br> Cuando por fin llegamos a la parada no vimos ningún taxi, les dije que me quedaba esperándolo, había gente y todavía no estaba oscuro, además, como solo tenía que esperar un taxi y era mi ruta de siempre, no les pareció mala idea, nos despedimos y se fueron camino a casa de Luna. Estaba cansada y solo quería llegar a  casa. </h2>';
    document.getElementById('contenido-17c').innerHTML = '<h2> <img src="amigo17.jpg"> </h2>';
  }
  else if (horaActual == 19) {
    document.getElementById('contenido-17').innerHTML = '<h2> <img class =imgmam src="mam19.jpg"> </h2>';
    document.getElementById('contenido-17b').innerHTML = '<h2> -Ya me subí al taxi mamá, ya voy para allá.- Dije mientras hablaba por teléfono, no habían pasado taxis en un rato y me subí al primero que hizo parada, en taxi solo eran 30 minutos de camino o 40 si había mucho tráfico. <br> Al menos Luna ya nos había mandado un mensaje al grupo de que ya había llegado. </h2>';
    document.getElementById('contenido-17c').innerHTML = '<h2> Dejé a Luna en su casa e inmediatamente envió un mensaje al grupo que teníamos los 3, yo aún tenía que hacer algunas cosas entonces me apresuré a ir hacia el centro a terminar mis pendientes. </h2>';
  }
  else if (horaActual == 20) {
    document.getElementById('contenido-17').innerHTML = '<h2> Se me hizo raro que Amanda todavía no llegara, pero tal vez se tardó en pasar un taxi.</h2>';
    document.getElementById('contenido-17b').innerHTML = '<h2><img class="glitch" src="glitch1.gif"></h2>';
    document.getElementById('contenido-17c').innerHTML = '<h2> -¿Sabes si ya llegó Amanda a su casa?- Fue el mensaje que recibí de Luna, ya tenía que haber llegado a casa y siempre nos avisamos en el grupo. <br> Solo tenía un rato que la habíamos dejado, probablemente había tráfico y ya no faltaba mucho para que llegara. <br> Le dije a Luna que no se preocupara. </h2>';
  }
  else if (horaActual == 21) {
    document.getElementById('contenido-17').innerHTML = '<h2> Ya había pasado mucho tiempo y cuando le llamaba no me contestaba. <br> Me empecé a preocupar, siempre le decía que llevara su celular con suficiente batería. <br> -Mejor le mando un mensaje a sus amigos- pensé </h2>';
    document.getElementById('contenido-17b').innerHTML = '<h2> <a href ="https://www.elsoldetoluca.com.mx/local/edomex-primer-lugar-nacional-en-desaparicion-de-personas-10427432.html" target = "_blank" ><img src = "noti1.png"></a> </h2>';
    document.getElementById('contenido-17c').innerHTML = '<h2> - Hola, perdón que te moleste, ¿de casualidad mi hija está con ustedes?  </h2> <h2> - No, se fue hace un rato, ¿aún no llega a casa? </h2> <h2> -No, y ya tiene rato que me dijo que estaba en el taxi. </h2> <h2> - Que raro, aún estoy en Lerma, iré a ver a la parada y si no la veo iré a la escuela, tal vez se le olvidó algo. </h2> <h2> - Ok, gracias </h2>';
  }
  else if (horaActual == 22) {
    document.getElementById('contenido-17').innerHTML = '<h2> Me quedé atenta por si Armando sabía algo de mi hija, pero aún así estaba inquieta. <br> Por más tráfico que hubiera no tardaría tanto. <br> <a onclick ="reproimg2()" href="https://adnoticias.mx/desapariciones-estado-de-mexico/" target= "_blank">En la televisión solo pasaban noticias acerca de cuántas personas desaparecen en el estado de México y solo podía pensar en que ojalá mi hija no fuera una de ellas. </a><br> Y que yo no tuviera que ser una de esas madres que buscan los restos de sus hijos. </h2>';
    document.getElementById('contenido-17b').innerHTML = '<h2> <img src = "mochi.jpg"> </h2>';
    document.getElementById('contenido-17c').innerHTML = '<h2> En la parada no estaba, iba camino a la escuela y le había avisado a mi mamá que iba a llegar tarde porque Amanda no aparecía. </h2>';
  }
  else if (horaActual == 23) {
    document.getElementById('contenido-17').innerHTML = '<h2> <img src = "cuaderno.png"> </h2>';
    document.getElementById('contenido-17b').innerHTML = '<h2> <img class= "glitch" src = "glitch2.gif"> </h2>';
    document.getElementById('contenido-17c').innerHTML = '<h2> <img src = "velarias.jpg"> </h2>';
  }
  else if (horaActual == 0) {
    document.getElementById('contenido-17').innerHTML = '<h2> Seguía marcándole a mi hija con la esperanza de que le entrara la llamada, ya había pasado mucho tiempo, estaba esperando a que llegaran Armando y su mamá para ir a denunciar su desaparición y que la empezarán a buscar. </h2> <h2 onclick="reprotext()" style = "cursor: pointer; text-decoration-line: underline; text-decoration-color: white;" > Solo me mandaba a buzón después de unos cuantos tonos. </h2>';
    document.getElementById('contenido-17b').innerHTML = '<h2> <img onclick= "reproimg1()"class="telef" style="cursor: pointer;" src= "telef.gif"> </h2>';
    document.getElementById('contenido-17c').innerHTML = '<h2> En la escuela no había nada y tampoco la habían visto regresar. <br> Regresé a la parada y cuando pregunté al checador de los camiones si había visto a mi amiga me dijo que sí, que se había subido a un taxi. <br> -Tienen que tener cuidado, ahora hay muchos taxis pirata. - <br>Le había avisado a Luna de Amanda, ella permanecía atenta y empezó a publicar en redes sociales si alguien sabía donde estaba Amanda. <br> Mi mamá iba a pasar por mí también para irnos hacia casa de Amanda y apoyar a su mamá.</h2>';
  }
  else if (horaActual == 1) {
    document.getElementById('contenido-17').innerHTML = '<h2> -Lo último que supe es que se subió a un taxi - Les dije a los de la fiscalía cuando me preguntaron acerca de mi hija.<br> - Es muy pronto, <a href ="https://expansion.mx/nacional/2013/06/26/esperar-72-horas-para-buscar-a-un-desaparecido-es-anacronico" target="_blank"> aún no pasan 72 horas.</a> ¿Ya la buscó bien? ¿No se pudo haber ido con su novio, algún familiar o de fiesta? Va en la universidad. - <br> </h2>';
    document.getElementById('contenido-17b').innerHTML = '<h2> <img src = "taxi.png"> </h2>';
    document.getElementById('contenido-17c').innerHTML = '<h2> No nos habían ayudado nada, la mamá de Amanda tenía mucho coraje, mi mamá también estaba indignada. <br> Sugerí que diéramos unas vueltas en el auto para buscar a Amanda y creímos que era lo único por hacer. </h2>';
  }
  else if (horaActual == 2) {
    document.getElementById('contenido-17').innerHTML = '<h2> Llevábamos ya una hora buscando, había avisado a mi vecina y también estaban buscando cerca de la colonia, estaban revisando los taxis. <br> Buscábamos cualquier indicio, aunque fuera el mínimo. </h2>';
    document.getElementById('contenido-17b').innerHTML = '<h2> <a href="https://www.excelsior.com.mx/comunidad/hallan-fosas-en-lerma-edomex-habia-68-bolsas-con-restos-humanos/1569553" target = "_blank"> <img src = "noti2.jpg"></a>  </h2>';
    document.getElementById('contenido-17c').innerHTML = '<h2> Mi mamá estaba tranquilizando a la mamá de Amanda, yo la entendía, si para mí era desesperante no imagino para ella. <br> Tenía todas mis esperanzas en encontrarla. </h2>';
  }
  else if (horaActual == 3) {
    document.getElementById('contenido-17').innerHTML = '<h2> A pesar de todo no podía dejar de llorar, quería abrazar a mi hija, nunca nos habíamos llevado mal, nunca se iría así nada más, sin avisar. <br> Nunca la iba a dejar de buscar. </h2>';
    document.getElementById('contenido-17b').innerHTML = '<h2> No era un taxi regulado, era un taxi pirata. <br> Nunca me debí de haber subido. <br> Sea como sea me van a echar la culpa a mí. <br> Por ir sola, por como venía vestida, siempre será mi culpa.  </h2>';
    document.getElementById('contenido-17c').innerHTML = '<h2> ¿dónde? ¿dónde? ¿dónde? ¿dónde? ¿dónde? ¿dónde?¿dónde?¿dónde? <br> ¿dónde? ¿dónde? ¿dónde? ¿dónde?¿dónde?¿dónde?¿dónde?¿dónde?¿dónde?¿dónde?¿dónde?¿dónde?¿dónde?<br> ¿dónde?¿dónde?¿dónde?¿dónde?¿dónde?¿dónde?¿dónde?¿dónde?¿dónde?¿dónde?¿dónde?¿dónde?<br> ¿dónde estás Amanda? ¿dónde estás? <br> ¿dónde?¿dónde?¿dónde?¿dónde?¿dónde?¿dónde?¿dónde?¿dónde?¿dónde?¿dónde?¿dónde? <br> ¿dónde?¿dónde?¿dónde?¿dónde?¿dónde?¿dónde?¿dónde?¿dónde?¿dónde?¿dónde?¿dónde?¿dónde? <br ¿dónde?¿dónde?¿dónde?¿dónde?¿dónde?¿dónde?¿dónde?¿dónde?¿dónde?¿dónde?¿dónde?¿dónde?¿dónde?¿dónde?¿dónde?¿dónde?¿dónde?¿dónde?¿dónde?¿dónde?¿dónde? </h2>';
  }
  else if (horaActual == 4) {
    document.getElementById('contenido-17').innerHTML = '<h2> Encontré su celular. </h2>';
    document.getElementById('contenido-17b').innerHTML = '<h2> <img class= "glitch" src = "glitch3.gif"> </h2>';
    document.getElementById('contenido-17c').innerHTML = '<h2> Encontré su mochila. </h2>';
  }
  else if (horaActual == 5) {
    document.getElementById('contenido-17').innerHTML = '<h2> Yo no quería regresar a casa, menos cuando ya habíamos encontrado indicios, pero creo que tenían razón, necesitaba descansar un poco pero ¿cómo iba a descansar cuando no sé en dónde está mi hija? <br> Los gatos estaban inquietos. </h2>';
    document.getElementById('contenido-17b').innerHTML = '<h2> <a href="https://www.la-prensa.com.mx/metropoli/aumenta-cifra-de-desaparecidos-en-edomex-piden-mayor-participacion-de-municipios-10511348.html" target="_blank"> <img src = "noti3.jpg"> </a> </h2>';
    document.getElementById('contenido-17c').innerHTML = '<h2> Nos fuimos a casa, mi mamá quiso dar una última vuelta pero no encontramos nada más, antes íbamos a ir a la policía a presentar lo que encontramos con esperanzas de que iniciaran la investigación. </h2>';
  }
  else if (horaActual == 6) {
    final1();
    document.getElementById('contenido-17').innerHTML = '<h2> ¡- Pero tenemos que ir a la policía! - Le grité a Amanda, aunque sabía que estaba muy mal, no pude evitar sentir alivio de que por fin estuviera en casa. <br> -No mamá, no quiero hablar de nada. - Me dijo llorando, nos iba a costar mucho trabajo pero no la iba a dejar sola. <br> Estaba aquí e íbamos a estar bien. </h2>';
    document.getElementById('contenido-17b').innerHTML = '<h2> <img src = "final1.png"> </h2>';
    document.getElementById('contenido-17c').innerHTML = '<h2> Amanda nunca nos quiso decir que le pasó ese día. <br> Nunca le insistimos, ella sabrá cuando quiera hablar de ello, estábamos aquí para ella. <br> Al menos estaba viva. </h2>';
  }
  else if (horaActual == 7) {
    final2();
    document.getElementById('contenido-17').innerHTML = '<h2> <img src= "mam7.jpg"> </h2>';
    document.getElementById('contenido-17b').innerHTML = '<h2> <img src= "amanda7.jpg">  </h2>';
    document.getElementById('contenido-17c').innerHTML = '<h2> Pasaron 5 días y no había noticias de Amanda, su mamá no se daba por vencida y salía todos los días con un <a href="https://www.milenio.com/videos/estados/madres-buscadoras-bloquean-mexico-toluca-lucha-localizar-familiares-desaparecidos" target="_blank"> colectivo de búsqueda de la zona </a>, salían a pegar carteles y preguntar si la habían visto. </h2>';
  }
  sonire.play();
  mostrarVentana('ventana-1');
  mostrarVentana('ventana-2');
  mostrarVentana('ventana-3');
}

function cambioimg() {
  var img1 = document.getElementById("img17a");
  var img2 = document.getElementById("img17b");

  img1.style.display = "none";
  img2.style.display = "block";
}
function BotonIr() {
  if (horaActual >= 19 || horaActual < 7) {
    cambiarContenidoVentanas();
  }
}

//popup inicio
document.addEventListener('DOMContentLoaded', function() {
  var popin = document.getElementById('popin');
  popin.style.display = 'block';
});
function reprotext() {
  const audio = new Audio('dial.mp3');
  audio.play();
}
function reproimg1() {
  const audio = new Audio('ringtone.mp3');
  audio.play();
}
function reproimg2() {
  const audio = new Audio('desapar.mp3');
  audio.play();
}
function final1() {
  var popfin = document.getElementById("popfinal1");
  popfin.style.display = 'flex';
}
function cerrarfin1() {
  const sonpop = new Audio('sound.wav');
  var popin = document.getElementById('popfinal1');
  popin.style.display = 'none';
  sonpop.play();
}
function final2() {
  var popfin = document.getElementById("popfinal2");
  popfin.style.display = 'flex';
}
function cerrarfin2() {
  const sonpop = new Audio('sound.wav');
  var popin = document.getElementById('popfinal2');
  popin.style.display = 'none';
  sonpop.play();
}
function cerrarpopin() {
  const sonpop = document.getElementById("audiobtns");
  var popin = document.getElementById('popin');
  popin.style.display = 'none';
  sonpop.play();
}
function cerrarpopinst() {
  const sonpop = document.getElementById("audiobtns");
  var popin = document.getElementById('popinst1');
  popin.style.display = 'none';
  sonpop.play();
}
function cerrarpopinst2() {
  const sonpop = document.getElementById("audiobtns");
  var popin = document.getElementById('popinst2');
  popin.style.display = 'none';
  sonpop.play();
}



