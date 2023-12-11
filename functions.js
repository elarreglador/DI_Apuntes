//FILESYSTEM
const fs = require('fs');
let fichero = fs.readFileSync('./data/superheroes.json');
let supers = new Array();
supers = JSON.parse(fichero);
fichero.close;

//DEFINICIONES
let pos = 0;
let subtitulo = document.getElementById("subtitulo");
let superhero = document.getElementById("superhero");
let ejemplo = document.getElementById("ejemplo");
let main = document.getElementById("main");
let encarnaciones = document.getElementById("encarnaciones");
let informacion = document.getElementById("informacion");
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
    ejemplo.innerHTML=supers[pos].characters;
    main.value = supers[pos].main;
    encarnaciones.value = supers[pos].characters;
    informacion.value = supers[pos].info;
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
        "main": main.value,
        "superhero": superhero.value,
        "characters": encarnaciones.value,
        "info": informacion.value,
    };
    //supers.push(nuevo);
    supers.splice(pos,1,nuevo)

    fs.writeFileSync('./data/superheroes.json', JSON.stringify(supers));
    fs.close;
})

btnNuevo.addEventListener('click', () => {
    const nuevo = {
        "main": main.value,
        "superhero": superhero.value,
        "characters": encarnaciones.value,
        "info": informacion.value,
    };
    //supers.push(nuevo);
    supers.splice(pos,0,nuevo)

    fs.writeFileSync('./data/superheroes.json', JSON.stringify(supers));
    fs.close;
})