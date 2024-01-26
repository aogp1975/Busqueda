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
    document.getElementById('contenido-16').innerHTML = '<h2> mamá 16 </h2>';
    document.getElementById('contenido-16b').innerHTML = '<h2> -Ya casi, sí vamos a terminar temprano el proyecto.- Llevábamos todo el día trabajando y ya nos queríamos ir, yo tenía que llegar antes de las 6 a casa y me tardo al menos una hora entre los camiones que tengo que tomar, habíamos dejado todo para el último momento porque según nosotros el proyecto era rápido y podíamos mejor convivir entre nosotros. </h2>';
    document.getElementById('contenido-16c').innerHTML = '<h2> amigo 16 </h2>';
  }
  else if (horaActual == 17) {
    document.getElementById('contenido-17').innerHTML = '<h2> mamá 17 </h2>';
    document.getElementById('contenido-17b').innerHTML = '<h2> desaparecida 17 </h2>';
    document.getElementById('contenido-17c').innerHTML = '<h2> amigo 17 </h2>';
  }
  else if (horaActual == 18) {
    document.getElementById('contenido-17').innerHTML = '<h2> mamá 18 </h2>';
    document.getElementById('contenido-17b').innerHTML = '<h2> desaparecida 18 </h2>';
    document.getElementById('contenido-17c').innerHTML = '<h2> amigo 18 </h2>';
  }
  else if (horaActual == 19) {
    document.getElementById('contenido-17').innerHTML = '<h2> mamá 19 </h2>';
    document.getElementById('contenido-17b').innerHTML = '<h2> desaparecida 19 </h2>';
    document.getElementById('contenido-17c').innerHTML = '<h2> amigo 19 </h2>';
  }
  else if (horaActual == 20) {
    document.getElementById('contenido-17').innerHTML = '<h2> mamá 20</h2>';
    document.getElementById('contenido-17b').innerHTML = '<h2> <img class=telef src= "telef.gif"> </h2>';
    document.getElementById('contenido-17c').innerHTML = '<h2> amigo 20 </h2>';
  }
  else if (horaActual == 21) {
    document.getElementById('contenido-17').innerHTML = '<h2> mamá 21 </h2>';
    document.getElementById('contenido-17b').innerHTML = '<h2> desaparecida 21 </h2>';
    document.getElementById('contenido-17c').innerHTML = '<h2> amigo 21 </h2>';
  }
  else if (horaActual == 22) {
    document.getElementById('contenido-17').innerHTML = '<h2> mamá 22 </h2>';
    document.getElementById('contenido-17b').innerHTML = '<h2> <img class=telef src= "telef.gif"> </h2>';
    document.getElementById('contenido-17c').innerHTML = '<h2> amigo 22 </h2>';
  }
  else if (horaActual == 23) {
    document.getElementById('contenido-17').innerHTML = '<h2> mamá 23 </h2>';
    document.getElementById('contenido-17b').innerHTML = '<h2> desaparecida 23 </h2>';
    document.getElementById('contenido-17c').innerHTML = '<h2> amigo 23 </h2>';
  }
  else if (horaActual == 24) {
    document.getElementById('contenido-17').innerHTML = '<h2> mamá 24 </h2>';
    document.getElementById('contenido-17b').innerHTML = '<h2> desaparecida 24 </h2>';
    document.getElementById('contenido-17c').innerHTML = '<h2> amigo 24 </h2>';
  }
  else if (horaActual == 1) {
    document.getElementById('contenido-17').innerHTML = '<h2> mamá 1 </h2>';
    document.getElementById('contenido-17b').innerHTML = '<h2> desaparecida 1 </h2>';
    document.getElementById('contenido-17c').innerHTML = '<h2> amigo 1 </h2>';
  }
  else if (horaActual == 2) {
    document.getElementById('contenido-17').innerHTML = '<h2> mamá 2 </h2>';
    document.getElementById('contenido-17b').innerHTML = '<h2> desaparecida 2 </h2>';
    document.getElementById('contenido-17c').innerHTML = '<h2> amigo 2 </h2>';
  }
  else if (horaActual == 3) {
    document.getElementById('contenido-17').innerHTML = '<h2> mamá 3 </h2>';
    document.getElementById('contenido-17b').innerHTML = '<h2> desaparecida 3 </h2>';
    document.getElementById('contenido-17c').innerHTML = '<h2> amigo 3 </h2>';
  }
  else if (horaActual == 4) {
    document.getElementById('contenido-17').innerHTML = '<h2> mamá 4 </h2>';
    document.getElementById('contenido-17b').innerHTML = '<h2> desaparecida 4 </h2>';
    document.getElementById('contenido-17c').innerHTML = '<h2> amigo 4 </h2>';
  }
  else if (horaActual == 5) {
    document.getElementById('contenido-17').innerHTML = '<h2> mamá 5 </h2>';
    document.getElementById('contenido-17b').innerHTML = '<h2> desaparecida 5 </h2>';
    document.getElementById('contenido-17c').innerHTML = '<h2> amigo 5 </h2>';
  }
  else if (horaActual == 6) {
    document.getElementById('contenido-17').innerHTML = '<h2> mamá 6 </h2>';
    document.getElementById('contenido-17b').innerHTML = '<h2> desaparecida 6 </h2>';
    document.getElementById('contenido-17c').innerHTML = '<h2> amigo 6 </h2>';
  }
  else if (horaActual == 7) {
    document.getElementById('contenido-17').innerHTML = '<h2> mamá 7 </h2>';
    document.getElementById('contenido-17b').innerHTML = '<h2> desaparecida 7 </h2>';
    document.getElementById('contenido-17c').innerHTML = '<h2> amigo 7 </h2>';
  }
  sonire.play();
  mostrarVentana('ventana-1');
  mostrarVentana('ventana-2');
  mostrarVentana('ventana-3');
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



