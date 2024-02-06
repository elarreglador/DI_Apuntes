//FILESYSTEM
const fs = require('fs');
let archivo = './data/contenido.json';
let fichero = fs.readFileSync(archivo);
let supers = new Array();
supers = JSON.parse(fichero);
fichero.close;

//DEFINICIONES
let pos = 0;
let subtitulo = document.getElementById("subtitulo");
let superhero = document.getElementById("superhero");
let visorHTML = document.getElementById("visorHTML");
let mainJS = document.getElementById("mainJS");
let indexHTML = document.getElementById("indexHTML");
let functionsJS = document.getElementById("functionsJS");
let btnGuardar = document.getElementById("btnGuardar");
let btnNuevo = document.getElementById("btnNuevo");
let btnIzq = document.getElementById("btnIzq");
let btnDer = document.getElementById("btnDer");

//MAIN
actualiza();

//FUNCIONES
function actualiza() {
    subtitulo.value = supers[pos].superhero;
    superhero.value = supers[pos].superhero;
    visorHTML.innerHTML=supers[pos].characters;
    mainJS.value = supers[pos].mainJS;
    indexHTML.value = supers[pos].characters;
    functionsJS.value = supers[pos].info;
}

//EVENTOS

btnDer.addEventListener('click', () => {
    if (pos >= supers.length - 1) {
        //alert("tope");
    } else {
        pos++;
        actualiza();
    }
})

btnIzq.addEventListener('click', () => {
    if (pos <= 0) {
        //alert("tope");
    } else {
        pos--;
        actualiza();
    }
})

btnGuardar.addEventListener('click', () => {
    const nuevo = {
        "mainJS": mainJS.value,
        "superhero": superhero.value,
        "characters": indexHTML.value,
        "info": functionsJS.value,
    };
    //supers.push(nuevo);
    supers.splice(pos,1,nuevo)

    fs.writeFileSync(archivo, JSON.stringify(supers));
    fs.close;
})

btnNuevo.addEventListener('click', () => {
    const nuevo = {
        "mainJS": mainJS.value,
        "superhero": superhero.value,
        "characters": indexHTML.value,
        "info": functionsJS.value,
    };
    //supers.push(nuevo);
    supers.splice(pos,0,nuevo)

    fs.writeFileSync(archivo, JSON.stringify(supers));
    fs.close;
})