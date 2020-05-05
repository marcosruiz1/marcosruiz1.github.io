'use strict';

document.getElementById("CargarLibería").addEventListener("click",CargarLibería);

function cargarLibreria(){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){
            cargarXML(this);
        }
    };
    xhr.open("GET","libros.xml","true");
    xhr.send();
}

function cargarXML(xml)
{
    let precio = document.getElementsByTagName("precio");
    let docXML = xml.reponseXML;
    let tabla = "<tr><th>titulo</th><th>autor</th></tr>"
    let libros = docXML.getElementsByTagName("libro");
    for (let i = 0; i < libros.length; i++) {
        tabla += "<tr><td>";
        tabla += libros[i].getElementsByTagName("titulo")[0].textContent;
        tabla += "</td><td>";
        tabla += libros[i].getElementsByTagName("autor")[0].textContent;
        tabla += "</td></tr>";
        if(libros[i].getElementsByTagName("precio")[0].textContent < 25 )
        {
            libros[i].getElementsByTagName("titulo")[0].style.backgroundcolor = "green";
            libros[i].getElementsByTagName("autor")[0].style.backgroundcolor = "green";
        }
        else
        {
            libros[i].getElementsByTagName("titulo")[0].style.backgroundcolor = "red";
            libros[i].getElementsByTagName("autor")[0].style.backgroundcolor = "red";
        }

    }
    document.getElementById("tabla").innerHTML = tabla;
}

