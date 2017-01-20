function paginaActiva() {

    var dir = window.location.href;
    var host = window.location.protocol + "//" + window.location.host;
    var ruta = dir.substring(host.length);
    var archivos, activo = false;

    var menu = document.getElementById('menu');
    var elementos = menu.childNodes;

    for (i = 0; i < elementos.length; i++) {
        var nodos = elementos[i].childNodes;

        for (j = 0; j < nodos.length; j++){

            if (nodos[j].tagName === "A") {
                var url = nodos[j].getAttribute("href");

                if (url === ruta) {
                    activo = true;
                    elementos[i].className = "activo";
                    break;
                
                } else if (url === "/archivo/") {
                    archivos = elementos[i];
                }
            }
        }
    }
    if (!activo) {
        archivos.className = "activo";
    }
}
// Ejecutando la funcion
paginaActiva();


function buscar () {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
           if (xhr.status == 200) {
               console.log(JSON.parse(xhr.responseText));
           } else if (xhr.status == 400) {
              console.warn('Error 400');
           } else {
               console.warn('Error status:', xhr.status);
           }
        }
    };

    xhr.open("GET", "/index.json", true);
    xhr.send();
};

buscar();