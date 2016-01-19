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