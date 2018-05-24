function encriptar(elemento){
    var mensaje = document.getElementsByTagName("mensaje")[0].value;
    var mensaje_codificado = btoa(mensaje);
    document.getElementById("resultado2").innerHTML = mensaje_codificado;
}


