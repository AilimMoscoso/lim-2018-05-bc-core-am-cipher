let message = document.getElementById("message");
let salida = document.getElementById("resultado2");
let offset = document.getElementById("offset");
document.getElementById('codifica').addEventListener('click', () => {
  let mensajeCifrado = window.cipher.encode(message.value.toUpperCase(), parseInt(offset.value));
  salida.value = mensajeCifrado;
});
document.getElementById('decodifica').addEventListener('click', () => {
  let mensajeDescifrado = window.cipher.decode(message.value, parseInt(offset.value));
  salida.value = mensajeDescifrado;
});
