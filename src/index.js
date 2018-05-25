function encriptar (elemento) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    //let message = document.getElementsByTagName("mensaje")[0].value;
    //let offset = document.getElementsByÏd("offset").value;
    let message = "hola mundo";
    let offset = 10;
    let messageCipher = "";
    for (let i = 0; i < message.length; i++) {
        let ind = alphabet.indexOf(message[i]);
        if (ind == -1) messageCipher += message[i];
        else messageCipher += alphabet[(ind + offset) % 26];
    }
    console.log(messageCipher);
    //document.getElementById("resultado2").innerHTML = mensaje_codificado;
}