let message = document.getElementById("message");
let salida = document.getElementById("resultado2");
let offset = document.getElementById("offset");
document.getElementById('codifica').addEventListener('click', () => {
  let mensajeCifrado = window.cipher.encode(message.value.toUpperCase(), parseInt(offset.value));
  salida.value = mensajeCifrado.toUpperCase();
});
document.getElementById('decodifica').addEventListener('click', () => {
  let mensajeDescifrado = window.cipher.decode(message.value.toLowerCase(), parseInt(offset.value));
  salida.value = mensajeDescifrado.toUpperCase();
});
/*function obtenerValor (type) {
    let message = document.getElementById("message").value;
    let offset = parseInt(document.getElementById("offset").value);
    let salida;
    if (type === 'encode') salida = window.cipher.Encode(message,offset);
    else salida = window.cipher.Decode(message,offset);
    document.getElementById("resultado2").value=salida;
    //console.log(message);
    //console.log(offset);
    //console.log(salida);
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
