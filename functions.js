//FILESYSTEM
const fs = require('fs');
let archivo = './data/contenido.json';
let fichero = fs.readFileSync(archivo);
let objeto = new Array();
objeto = JSON.parse(fichero);
fichero.close;

//DEFINICIONES
let subtitulo = document.getElementById("subtitulo");
let superhero = document.getElementById("superhero");
let visorHTML = document.getElementById("visorHTML");
let mainJS = document.getElementById("mainJS");
let indexHTML = document.getElementById("indexHTML");
let functionsJS = document.getElementById("functionsJS");
let btnGuardar = document.getElementById("btnGuardar");
let btnNuevo = document.getElementById("btnNuevo");

//MAIN
rellenaDesplegable();

//FUNCIONES
function actualiza(nombre) {
    for (let i = 0; i < objeto.length; i++) {
        if (nombre == objeto[i].nombre) {
            visorHTML.innerHTML = objeto[i].characters;
            mainJS.value = objeto[i].mainJS;
            indexHTML.value = objeto[i].characters;
            functionsJS.value = objeto[i].info;
        }
    }
}

//averigua la posicion del array del objeto actual
function pos() {
    for (let i = 0; i < objeto.length; i++) {
        if (objeto.nombre == desplegable.value) {
            return i;
        } else {
            return -1;
        }
    }
}

//agregar varlores al desplegable ordenados alfabeticamente
function desplegableAdd(texto) {
    let opcion = document.createElement("option");
    opcion.text = texto;
    let totalOpciones = desplegable.options.length;
    // Recorre opciones y busca posición adecuada para la nueva opción
    for (let i = 0; i < totalOpciones; i++) {
        if (texto < desplegable.options[i].text) {
            desplegable.add(opcion, i);
            return; // Sal del bucle
        }
    }
    // Si la nueva opción debe ir al final
    desplegable.add(opcion);
}

function rellenaDesplegable() {
    for (let i = 0; i < objeto.length; i++) {
        desplegableAdd(objeto[i].nombre);
    }
}


btnGuardar.addEventListener('click', () => {
    const nuevo = {
        "mainJS": mainJS.value,
        "nombre": desplegable.value,
        "characters": indexHTML.value,
        "info": functionsJS.value,
    };
    objeto.splice(pos(), 1, nuevo)

    fs.writeFileSync(archivo, JSON.stringify(objeto));
    fs.close;

    rellenaDesplegable();
})

btnNuevo.addEventListener('click', () => {
    const nuevo = {
        "mainJS": mainJS.value,
        "nombre": desplegable.value,
        "characters": indexHTML.value,
        "info": functionsJS.value,
    };
    objeto.splice(pos(), 0, nuevo)

    fs.writeFileSync(archivo, JSON.stringify(objeto));
    fs.close;

    rellenaDesplegable();
})

desplegable.addEventListener('change', () => {
    actualiza(desplegable.value);
})