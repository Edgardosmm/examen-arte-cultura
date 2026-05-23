// Clave de respuestas oficial
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
// Clave oficial del examen (pregunta: respuesta correcta)
const clave = {
  1:"B",2:"C",3:"B",4:"A",5:"C",6:"A",7:"A",8:"A",9:"A",10:"B",
  11:"B",12:"A",13:"B",14:"C",15:"B",16:"B",17:"C",18:"B",19:"C",20:"B",
  21:"A",22:"A",23:"B",24:"C",25:"C",26:"C",27:"A",28:"C",29:"C",30:"A",
  31:"C",32:"C",33:"B",34:"B",35:"B",36:"B",37:"C",38:"A",39:"B",40:"A",
  41:"C",42:"C",43:"C",44:"A",45:"A",46:"A",47:"A",48:"A",49:"A",50:"B",
  51:"A",52:"B",53:"A",54:"B",55:"B",56:"C",57:"B",58:"C",59:"C",60:"B"
};

// URL de tu Apps Script publicado como aplicación web
const scriptURL = "TU_URL_DEL_SCRIPT"; // reemplaza con tu URL

function calificar() {
  let total = 0;
  let correctas = 0;
  let nombre = prompt("Ingresa tu nombre completo:");

  for (let i = 1; i <= 60; i++) {
    let opciones = document.getElementsByName("p" + i);
    let respuesta = "";
    for (let j = 0; j < opciones.length; j++) {
      if (opciones[j].checked) {
        respuesta = opciones[j].value;
      }
    }

    if (respuesta !== "") {
      total++;
      let correcta = (respuesta === clave[i]) ? "Correcta" : "Incorrecta";
      if (correcta === "Correcta") correctas++;

      // Mostrar retroalimentación en pantalla
      let retro = document.getElementById("retro" + i);
      retro.innerHTML = (correcta === "Correcta") 
        ? "<span style='color:green'>✔ Correcta</span>" 
        : "<span style='color:red'>✘ Incorrecta</span>";

      // Enviar cada respuesta a Google Sheets
      enviarRespuesta(nombre, "Pregunta " + i, respuesta, correcta);
    }
  }

  // Mostrar resultado final
  document.getElementById("resultado").innerHTML =
    "Respondiste " + total + " preguntas. Correctas: " + correctas + 
    ". Puntaje: " + ((correctas/60)*100).toFixed(2) + "%";
}

function enviarRespuesta(nombre, pregunta, respuesta, correcta) {
  fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify({
      nombre: nombre,
      pregunta: pregunta,
      respuesta: respuesta,
      correcta: correcta
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => console.log("Respuesta enviada"))
  .catch(err => console.error("Error:", err));
}
const scriptURL = "Thttps://www.google.com/search?q=AKfycbyrOPUcl9fgVxV8jDBNfi5YKHb2Dkm3yiTaKiOlonMN&oq=AKfycbyrOPUcl9fgVxV8jDBNfi5YKHb2Dkm3yiTaKiOlonMN&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIKCAEQABiABBiiBDIKCAIQABiABBiiBDIKCAMQABiABBiiBDIKCAQQABiABBiiBNIBCDUxMDJqMGo0qAIAsAIB&sourceid=chrome&ie=UTF-8";
