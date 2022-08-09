/* Caesars cipher

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
In a shift cipher the meanings of the letters are shifted by some set amount. 
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. 
Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string. 
All letters will be uppercase. 
Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

*/

function rot13(str) {
  var decoded = "";
  var shift = -13;
  var i = 0;

  for (i = 0; i < str.length; i++) {
    var echarcode = str.charCodeAt(i);

    console.log(
      "The charcode for " + str[i] + " at position " + i + " is " + echarcode
    );

    if (
      echarcode != 33 &&
      echarcode != 63 &&
      echarcode != 46 &&
      echarcode != 32
    ) {
      var dcharcode = echarcode + shift;
      if (dcharcode < 65) {
        dcharcode = 90 - (64 - dcharcode);
      }
      console.log(dcharcode);
    } else {
      var dcharcode = echarcode;
    }
    var char = String.fromCharCode(dcharcode);

    decoded += char;
  }
  console.log(decoded);
  return decoded;
}

rot13("SERR YBIR?");
