// Clave de respuestas (ejemplo con las primeras dos)
const respuestas = {
  p1: "B",
  p2: "C"
  // Aquí irán todas las demás respuestas: p3:"B", p4:"A", etc.
};

function calificar() {
  let correctas = 0;
  let total = Object.keys(respuestas).length;

  for (let key in respuestas) {
    let seleccionada = document.querySelector(`input[name="${key}"]:checked`);
    let retro = document.getElementById("retro" + key.substring(1));
    if (seleccionada) {
      if (seleccionada.value === respuestas[key]) {
        correctas++;
        retro.textContent = "✔ Correcto";
        retro.className = "retro correcta";
      } else {
        retro.textContent = "✘ Incorrecto. La respuesta correcta es " + respuestas[key];
        retro.className = "retro incorrecta";
      }
    } else {
      retro.textContent = "No marcaste respuesta.";
      retro.className = "retro incorrecta";
    }
  }

  document.getElementById("resultado").textContent =
    "Tu puntaje: " + correctas + " de " + total + " (" + Math.round((correctas/total)*100) + "%)";
}
// Clave de respuestas oficial (clave 23.pdf)
const respuestas = {
  p1:"B", p2:"C", p3:"B", p4:"A", p5:"C",
  p6:"A", p7:"A", p8:"A", p9:"A", p10:"B",
  p11:"B", p12:"A", p13:"B", p14:"C", p15:"B",
  p16:"B", p17:"C", p18:"B", p19:"C", p20:"B",
  p21:"A", p22:"A", p23:"B", p24:"C", p25:"C",
  p26:"C", p27:"A", p28:"C", p29:"C", p30:"A",
  p31:"C", p32:"C", p33:"B", p34:"B", p35:"B",
  p36:"B", p37:"C", p38:"A", p39:"B", p40:"A",
  p41:"C", p42:"C", p43:"C", p44:"A", p45:"A",
  p46:"A", p47:"A", p48:"A", p49:"A", p50:"B",
  p51:"A", p52:"B", p53:"A", p54:"B", p55:"B",
  p56:"C", p57:"B", p58:"C", p59:"C", p60:"B"
};

function calificar() {
  let correctas = 0;
  let total = Object.keys(respuestas).length;

  for (let key in respuestas) {
    let seleccionada = document.querySelector(`input[name="${key}"]:checked`);
    let retro = document.getElementById("retro" + key.substring(1));
    if (seleccionada) {
      if (seleccionada.value === respuestas[key]) {
        correctas++;
        retro.textContent = "✔ Correcto";
        retro.className = "retro correcta";
      } else {
        retro.textContent = "✘ Incorrecto. La respuesta correcta es " + respuestas[key];
        retro.className = "retro incorrecta";
      }
    } else {
      retro.textContent = "No marcaste respuesta.";
      retro.className = "retro incorrecta";
    }
  }

  document.getElementById("resultado").textContent =
    "Tu puntaje: " + correctas + " de " + total + " (" + Math.round((correctas/total)*100) + "%)";
}
