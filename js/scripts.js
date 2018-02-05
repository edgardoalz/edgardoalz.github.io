(function () {

    // set search element
    var searchBtn = document.getElementById('searchBtn');
    var searchTxt = document.getElementById('searchTxt');
    var data = document.getElementById('datos');
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

    function getArticles () {
        return new Promise (function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == XMLHttpRequest.DONE) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.responseText));
                    } else if (xhr.status == 400) {
                        reject('Error 404');
                    } else {
                        reject('Error: ' + xhr.status);
                    }
                }
            };

            xhr.open("GET", "/index.json", true);
            xhr.send();
        }) ;

    }


    searchBtn.addEventListener('click', search);
    searchTxt.addEventListener('keypress', function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            search();
        }
    });
    function search () {
        getArticles().then(function (articles) {
            var regex = new RegExp(searchTxt.value, 'ig');
            var filter = articles.filter(function (article) {
                return regex.test(article.summary) || regex.test(article.title);
            });
            console.log(data);
            console.log(filter);
        }).catch(function (error) {
            console.warn(error);
        });
    }

    window.onload = function (ev) {
        var content = document.querySelector('#contenido');
        content.classList.toggle('fade');
    }

})();






