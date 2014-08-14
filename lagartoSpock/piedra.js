/*

Reglas del piedra, papel, tijeras, lagarto o Spock según Sheldon (The big bang theory)

“Las tijeras cortan el papel, el papel cubre a la piedra,
la piedra aplasta al lagarto, el lagarto envenena a Spock,
Spock destroza las tijeras, las tijeras decapitan al lagarto,
el lagarto se come el papel, el papel refuta a Spock,
Spock vaporiza la piedra, y, como es habitual… la piedra aplasta las tijeras.”

 */

var opciones = ["piedra", "papel", "tijera","lagarto", "spock"];
var eleccionMaquina;

var contadorMaquina = 0;
var contadorUsuario = 0;
var contadorEmpate = 0;
var resultado;

function inicio() {
    console.log("Javascript cargado correctamente");
}

function maquina() {
    return Math.floor(Math.random() * 5);
}

function usuario(eleccionUsuario) {

    eleccionMaquina = opciones[maquina()];

    if(eleccionUsuario === 'piedra') {
        if(eleccionMaquina === 'papel') {
            resultado ='El papel cubre a la piedra... ¡Perdiste!';
            ++contadorMaquina;
        }
        else if(eleccionMaquina === 'lagarto') {
            resultado ='La piedra aplasta al lagarto... ¡Ganaste!';
            ++contadorUsuario;
        }
        else if(eleccionMaquina === 'spock') {
            resultado ='Spock vaporiza la piedra... ¡Perdiste!';
            ++contadorMaquina;
        }
        else if(eleccionMaquina === 'tijera') {
            resultado ='Como es habitual… la piedra aplasta las tijeras... ¡Ganaste!';
            ++contadorUsuario;
        }
        else if(eleccionMaquina === 'piedra') {
            resultado ='AHHHHHHHHHHHH... ¡Empate!';
            ++contadorEmpate;
        }
    }

    else if(eleccionUsuario === 'papel') {
        if(eleccionMaquina === 'lagarto') {
            resultado ='El lagarto se come el papel... ¡Perdiste!';
            ++contadorMaquina;
        }
        else if(eleccionMaquina === 'spock') {
            resultado ='El papel refuta a Spock... ¡Ganaste!';
            ++contadorUsuario;
        }
        else if(eleccionMaquina === 'tijera') {
            resultado ='Las tijeras cortan el papel... ¡Perdiste!';
            ++contadorMaquina;
        }
        else if(eleccionMaquina === 'piedra') {
            resultado ='El papel cubre a la piedra... ¡Ganaste!';
            ++contadorUsuario;
        }
        else if(eleccionMaquina === 'papel') {
            resultado ='AHHHHHHHHHHHH... ¡Empate!';
            ++contadorEmpate;
        }
    }

    else if(eleccionUsuario === 'tijera') {
        if(eleccionMaquina === 'papel') {
            resultado ='Las tijeras cortan el papel... ¡Ganaste!';
            ++contadorUsuario;
        }
        else if(eleccionMaquina === 'spock') {
            resultado ='Spock destroza las tijeras... ¡Perdiste!';
            ++contadorMaquina;
        }
        else if(eleccionMaquina === 'lagarto') {
            resultado ='Las tijeras decapitan al lagarto... ¡Ganaste!';
            ++contadorUsuario;
        }
        else if(eleccionMaquina === 'piedra') {
            resultado ='Como es habitual… la piedra aplasta las tijeras... ¡Perdiste!';
            ++contadorMaquina;
        }
        else if(eleccionMaquina === 'tijera') {
            resultado ='AHHHHHHHHHHHH... ¡Empate';
            ++contadorEmpate;
        }
    }

    else if(eleccionUsuario === 'lagarto') {
        if(eleccionMaquina === 'piedra') {
          resultado ='La piedra aplasta al lagarto... ¡Perdiste!';
            ++contadorMaquina;
        }
        else if(eleccionMaquina === 'spock') {
            resultado ='El lagarto envenena a Spock... ¡Ganaste!';
            ++contadorUsuario;
        }
        else if(eleccionMaquina === 'tijera') {
            resultado ='Las tijeras decapitan al lagarto... ¡Perdiste!';
            ++contadorMaquina;
        }
        else if(eleccionMaquina === 'papel') {
            resultado ='El lagarto se come el papel... ¡Ganaste!';
            ++contadorUsuario;
        }
        else if(eleccionMaquina === 'lagarto') {
            resultado ='AHHHHHHHHHHHH... ¡Empate!';
            ++contadorEmpate;
        }
    }

    else if(eleccionUsuario === 'spock') {
        if(eleccionMaquina === 'lagarto') {
            resultado ='El lagarto envenena a Spock... ¡Perdiste!';
            ++contadorMaquina;
        }
        else if(eleccionMaquina === 'tijera') {
            resultado ='Spock destroza las tijeras... ¡Ganaste!';
            ++contadorUsuario;
        }
        else if(eleccionMaquina === 'papel') {
            resultado ='El papel refuta a Spock... ¡Perdiste!';
            ++contadorMaquina;
        }
        else if(eleccionMaquina === 'piedra') {
            resultado ='Spock vaporiza la piedra... ¡Ganaste!';
            ++contadorUsuario;
        }
        else if(eleccionMaquina === 'spock') {
            resultado ='AHHHHHHHHHHHH... ¡Empate!';
            ++contadorEmpate;
        }
    }

    mostrarResultado(eleccionUsuario, eleccionMaquina);
}

function mostrarResultado(eleccionUsuario, eleccionMaquina) {

    if(eleccionMaquina === eleccionUsuario) {
        document.getElementById('blur').innerHTML = '<h1>' + resultado +
        '</h1> <h3>Ambos eligieron ' + eleccionMaquina;
    }
    else {
        document.getElementById('blur').innerHTML = '<h1>' + resultado +
        '</h1>  <h3>La maquina eligio ' + eleccionMaquina +
        ' y tu ' + eleccionUsuario;
    }
    document.getElementById('victoriaMaquina').innerHTML = contadorMaquina;
    document.getElementById('victoriaUsuario').innerHTML = contadorUsuario;
    document.getElementById('Empate').innerHTML = contadorEmpate;
    document.getElementById('blur').style.display = "";
}

function quitarResultado() {
    document.getElementById('blur').style.display = "none";
}


