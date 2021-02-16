/* Caesars cipher

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount. A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string. All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

*/

function rot13(str) {
  var decoded = "";
  for (i = 0; i<str.length;i++){
    var charcode = str.charCodeAt(i);
    if(str[i] == "a"){
        console.log("The charcode for " + str[i] +" at position" + i +  "is " +charcode);
    }
    if(str[i] !== " "){
        var charcode = charcode + shift;
        var char = String.fromCharCode(charcode);
    }
    else{
        var char = " ";
    }
    
    decoded += char;
}
    return decoded;
  }
  
  rot13("SERR PBQR PNZC");