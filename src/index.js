function obtenerValor (type) {
    let message = document.getElementById("message").value;
    let offset = parseInt(document.getElementById("offset").value);
    let salida;
    if (type === 'encode') salida = window.cipher.Encode(message,offset);
    else salida = window.cipher.Decode(message,offset);
    document.getElementById("resultado2").value=salida;
    console.log(message);
    console.log(offset);
    console.log(salida);
}
 //let alphabet = "abcdefghijklmnopqrstuvwxyz";
    //.addEventListener("click", encriptar(){
//document.getElementById("resultado2").innerHTML = messageCipher;
    //});
    /*
    let offset = document.getElementsById("offset").value;
    let messageCipher = "";
    
    for (let i = 0; i < message.length; i++) {
        let ind = alphabet.indexOf(message[i]);
        if (ind == -1) messageCipher += message[i];
        else messageCipher += alphabet[(ind + offset) % 26];
    }
    console.log(messageCipher);
    //document.getElementById("resultado2").innerHTML = mensaje_codificado;
    */
