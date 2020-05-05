function gestionarFicheroTXT(txtDoc){
	
	console.log(txtDoc)
	
}

function CargarFichero()
{
    loadLDocA("mensajes.txt","txt")
}
function intervalo()
{
	interval = setInterval(CargarFichero,10000);
}


