/*

Reglas del piedra, papel, tijeras, lagarto o Spock según Sheldon (The big bang theory)

“Las tijeras cortan el papel, el papel cubre a la piedra, la piedra aplasta al lagarto, el lagarto envenena a Spock, Spock destroza las tijeras, las tijeras decapitan al lagarto, el lagarto se come el papel, el papel refuta a Spock, Spock vaporiza la piedra, y, como es habitual… la piedra aplasta las tijeras.”

 */

var opciones = ["piedra", "papel", "tijera","lagarto", "spock"];
var eleccionMaquina;

var contadorMaquina = 0;
var contadorUsuario = 0;
var contadorEmpate = 0;

function maquina() {
    eleccionMaquina = Math.floor(Math.random() * 5);
}

function usuario(eleccionUsuario) {

maquina();

if(eleccionUsuario === 'piedra') {
    if(opciones[eleccionMaquina] === 'papel') {
        document.getElementById('blur').innerHTML ='<h1>El papel cubre a la piedra... ¡Perdiste!</h1> <h3>La maquina eligio papel y tu piedra.</h3>';
        ++contadorMaquina;
    }
    if(opciones[eleccionMaquina] === 'lagarto') {
        document.getElementById('blur').innerHTML ='<h1>La piedra aplasta al lagarto... ¡Ganaste!</h1> <h3>La maquina eligio lagarto y tu piedra.</h3>';
        ++contadorUsuario;
    }
    if(opciones[eleccionMaquina] === 'spock') {
        document.getElementById('blur').innerHTML ='<h1>Spock vaporiza la piedra... ¡Perdiste!</h1> <h3>La maquina eligio Spock y tu piedra.</h3>';
        ++contadorMaquina;
    }
    if(opciones[eleccionMaquina] === 'tijera') {
        document.getElementById('blur').innerHTML ='<h1>Como es habitual… la piedra aplasta las tijeras... ¡Ganaste!</h1> <h3>La maquina eligio tijera y tu piedra.</h3>';
        ++contadorUsuario;
    }
    if(opciones[eleccionMaquina] === 'piedra') {
        document.getElementById('blur').innerHTML ='<h1>AHHHHHHHHHHHH... ¡Empate!</h1> <h3>Ambos eligieron piedra.</h3>';
        ++contadorEmpate;
    }
}

if(eleccionUsuario === 'papel') {
    if(opciones[eleccionMaquina] === 'lagarto') {
        document.getElementById('blur').innerHTML ='<h1>El lagarto se come el papel... ¡Perdiste!</h1> <h3>La maquina eligio lagarto y tu papel.</h3>';
        ++contadorMaquina;
    }
    if(opciones[eleccionMaquina] === 'spock') {
        document.getElementById('blur').innerHTML ='<h1>El papel refuta a Spock... ¡Ganaste!</h1> <h3>La maquina eligio Spock y tu papel.</h3>';
        ++contadorUsuario;
    }
    if(opciones[eleccionMaquina] === 'tijera') {
        document.getElementById('blur').innerHTML ='<h1>Las tijeras cortan el papel... ¡Perdiste!</h1> <h3>La maquina eligio tijera y tu papel.</h3>';
        ++contadorMaquina;
    }
    if(opciones[eleccionMaquina] === 'piedra') {
        document.getElementById('blur').innerHTML ='<h1>El papel cubre a la piedra... ¡Ganaste!</h1> <h3>La maquina eligio piedra y tu papel.</h3>';
        ++contadorUsuario;
    }
    if(opciones[eleccionMaquina] === 'papel') {
        document.getElementById('blur').innerHTML ='<h1>AHHHHHHHHHHHH... ¡Empate!</h1> <h3>Ambos eligieron papel.</h3>';
        ++contadorEmpate;
    }
}

if(eleccionUsuario === 'tijera') {
    if(opciones[eleccionMaquina] === 'papel') {
        document.getElementById('blur').innerHTML ='<h1>Las tijeras cortan el papel... ¡Ganaste!</h1> <h3>La maquina eligio papel y tu tijera.</h3>';
        ++contadorUsuario;
    }
    if(opciones[eleccionMaquina] === 'spock') {
        document.getElementById('blur').innerHTML ='<h1>Spock destroza las tijeras ¡Perdiste!</h1> <h3>La maquina eligio Spock y tu tijera.</h3>';
        ++contadorMaquina;
    }
    if(opciones[eleccionMaquina] === 'lagarto') {
        document.getElementById('blur').innerHTML ='<h1>las tijeras decapitan al lagarto... ¡Ganaste!</h1> <h3>La maquina eligio lagarto y tu tijera.</h3>';
        ++contadorUsuario;
    }
    if(opciones[eleccionMaquina] === 'piedra') {
        document.getElementById('blur').innerHTML ='<h1>Como es habitual… la piedra aplasta las tijeras... ¡Perdiste!</h1> <h3>La maquina eligio piedra y tu tijera.</h3>';
        ++contadorMaquina;
    }
    if(opciones[eleccionMaquina] === 'tijera') {
        document.getElementById('blur').innerHTML ='<h1>AHHHHHHHHHHHH... ¡Empate!</h1> <h3>Ambos eligieron tijera.</h3>';
        ++contadorEmpate;
    }
}

if(eleccionUsuario === 'lagarto') {
    if(opciones[eleccionMaquina] === 'piedra') {
      document.getElementById('blur').innerHTML ='<h1>La piedra aplasta al lagarto... ¡Perdiste!</h1> <h3>La maquina eligio piedra y tu lagarto.</h3>';
        ++contadorMaquina;
    }
    if(opciones[eleccionMaquina] === 'spock') {
        document.getElementById('blur').innerHTML ='<h1>El lagarto envenena a Spock... ¡Ganaste!</h1> <h3>La maquina eligio Spock y tu lagarto.</h3>';
        ++contadorUsuario;
    }
    if(opciones[eleccionMaquina] === 'tijera') {
        document.getElementById('blur').innerHTML ='<h1>las tijeras decapitan al lagarto... ¡Perdiste!</h1> <h3>La maquina eligio tijera y tu lagarto.</h3>';
        ++contadorMaquina;
    }
    if(opciones[eleccionMaquina] === 'papel') {
        document.getElementById('blur').innerHTML ='<h1>El lagarto se come el papel... ¡Ganaste!</h1> <h3>La maquina eligio papel y tu lagarto.</h3>';
        ++contadorUsuario;
    }
    if(opciones[eleccionMaquina] === 'lagarto') {
        document.getElementById('blur').innerHTML ='<h1>AHHHHHHHHHHHH... ¡Empate!</h1> <h3>Ambos eligieron lagarto.</h3>';
        ++contadorEmpate;
    }
}

if(eleccionUsuario === 'spock') {
    if(opciones[eleccionMaquina] === 'lagarto') {
        document.getElementById('blur').innerHTML ='<h1>El lagarto envenena a Spock... ¡Perdiste!</h1> <h3>La maquina eligio lagarto y tu Spock.</h3>';
        ++contadorMaquina;
    }
    if(opciones[eleccionMaquina] === 'tijera') {
        document.getElementById('blur').innerHTML ='<h1>Spock destroza las tijeras ¡Ganaste!</h1> <h3>La maquina eligio tijera y tu Spock.</h3>';
        ++contadorUsuario;
    }
    if(opciones[eleccionMaquina] === 'papel') {
        document.getElementById('blur').innerHTML ='<h1>El papel refuta a Spock... ¡Perdiste!</h1> <h3>La maquina eligio papel y tu Spock.</h3>';
        ++contadorMaquina;
    }
    if(opciones[eleccionMaquina] === 'piedra') {
        document.getElementById('blur').innerHTML ='<h1>Spock vaporiza la piedra... ¡Ganaste!</h1> <h3>La maquina eligio piedra y tu Spock.</h3>';
        ++contadorUsuario;
    }
    if(opciones[eleccionMaquina] === 'spock') {
        document.getElementById('blur').innerHTML ='<h1>AHHHHHHHHHHHH... ¡Empate!</h1> <h3>Ambos eligieron Spock.</h3>';
        ++contadorEmpate;
    }
}

document.getElementById('blur').style.display = "";
document.getElementById('victoriaMaquina').innerHTML = contadorMaquina;
document.getElementById('victoriaUsuario').innerHTML = contadorUsuario;
document.getElementById('Empate').innerHTML = contadorEmpate;

}


function quitarBlur() {
    document.getElementById('blur').style.display = "none";
}

