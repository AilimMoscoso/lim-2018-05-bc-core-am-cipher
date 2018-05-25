window.cipher = { 
  Encode: (string, offset)=>{
    let messageCipher = " ";
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
  for (let i = 0; i < string.length; i++) {
    let ind = alphabet.indexOf(string[i]);
    if (ind == -1) messageCipher += string[i];
    else messageCipher += alphabet[(ind + offset) % 26];
}
return messageCipher;
  }
};
