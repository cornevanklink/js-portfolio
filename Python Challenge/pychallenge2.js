/*  Python Challenge 2 using Javascript 
    http://www.pythonchallenge.com/pc/def/map.html
    Challenge: Caesar Cipher with the transformation below (2 letters in the alphabet forward)
    K > M
    O > Q
    E > G

    answer = ocr
*/

// Declaring variables
var input =
  "g fmnc wms bgblr rpylqjyrc gr zw fylb. rfyrq ufyr amknsrcpq ypc dmp. bmgle gr gl zw fylb gq glcddgagclr ylb rfyr'q ufw rfgq rcvr gq qm jmle. sqgle qrpgle.kyicrpylq() gq pcamkkclbcb. lmu ynnjw ml rfc spj.";
var input2 = "map";
var shift = 2;
var decoded = "";

console.log("The input for this challenge is:");
console.log(input2);

function caesarcipher(encoded, shift) {
  for (i = 0; i < encoded.length; i++) {
    // Take Unicode number of character
    var charcode = encoded.charCodeAt(i);

    // Shift Unicode number of character and turn back into character
    if (encoded[i] !== " ") {
      var charcode = charcode + shift;
      var char = String.fromCharCode(charcode);
    } else {
      var char = " ";
    }
    // Add shifted character to decoded message.
    decoded += char;
  }

  return decoded;
}

var output = caesarcipher(input2, 2);

console.log("The output for this challenge is:");
console.log(output);
