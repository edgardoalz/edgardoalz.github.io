(function () {

    function activePage () {
        var dir = window.location.href;
        var host = window.location.protocol + "//" + window.location.host;
        var path = dir.substring(host.length);
        var archives, active = false;

        var menu = document.getElementById('menu');
        var elements = menu.childNodes;

        for (i = 0; i < elements.length; i++) {
            var nodes = elements[i].childNodes;

            for (j = 0; j < nodes.length; j++){

                if (nodes[j].tagName === "A") {
                    var url = nodes[j].getAttribute("href");

                    if (url === path) {
                        active = true;
                        elements[i].className = "activo";
                        break;
                    
                    } else if (url === "/articulos/") {
                        archives = elements[i];
                    }
                }
            }
        }
        if (!active) {
            archives.className = "activo";
        }
    }

    // Ejecutando la funcion
    activePage();

    window.onload = function (ev) {
        var content = document.querySelector('#contenido');
        content.classList.toggle('fade');
    }

})();






