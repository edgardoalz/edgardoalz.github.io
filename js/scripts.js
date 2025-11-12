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

    // window.onload = function (ev) {
    //     var content = document.querySelector('#contenido');
    //     content.classList.toggle('fade');
    // }

    // Image optimization: Add lazy loading and async decoding to all images
    function optimizeImages() {
        var images = document.querySelectorAll('img');
        images.forEach(function(img) {
            // Add lazy loading if not already set
            if (!img.hasAttribute('loading')) {
                img.setAttribute('loading', 'lazy');
            }
            // Add async decoding for better performance
            if (!img.hasAttribute('decoding')) {
                img.setAttribute('decoding', 'async');
            }
        });
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', optimizeImages);
    } else {
        optimizeImages();
    }

})();






