  
function loadLDocA(fichero,tipo)
{
    let http = new XMLHttpRequest(); 
    http.open("GET",fichero,true); 
    http.setRequestHeader("Content-type", "text/xml");
    http.send();
    http.addEventListener('load', (event) => {  
        if(http.status === 200) {
            if(tipo == "xml")
            {
                gestionarFicheroXML(http.responseXML)
            }
            else
			    gestionarFicheroTXT(http.responseText)
		}})
}

