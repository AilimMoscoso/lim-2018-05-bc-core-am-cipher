function obtenerValor () {
    //let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let message = document.getElementById("message").value;
    let offset=parseInt(document.getElementById("offset").value);
    let salida1=window.cipher.Encode(message,offset);
    document.getElementById("resultado2").value=salida1;
    console.log(message);
    console.log(offset);
    console.log(salida1);
}
    
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
