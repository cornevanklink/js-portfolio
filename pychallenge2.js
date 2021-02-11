/*  Python Challenge 2 using Javascript 
    http://www.pythonchallenge.com/pc/def/map.html
    Challenge: Caesar Cipher with the transformation below (2 letters in the alphabet forward)
    K > M
    O > Q
    E > G

    answer = ocr
*/


var input = "g fmnc wms bgblr rpylqjyrc gr zw fylb. rfyrq ufyr amknsrcpq ypc dmp. bmgle gr gl zw fylb gq glcddgagclr ylb rfyr'q ufw rfgq rcvr gq qm jmle. sqgle qrpgle.kyicrpylq() gq pcamkkclbcb. lmu ynnjw ml rfc spj.";
var input2 = "map";
var shift = 2;

console.log("The input for this challenge is:");
console.log(input);

var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');


function caesarcipher(encoded, shift){
    var i;
    var decoded = "";

    for (i = 0; i<encoded.length;i++){
        var charcode = encoded.charCodeAt(i);
        if(encoded[i] == "a"){
            console.log("The charcode for " + encoded[i] +" at position" + i +  "is " +charcode);
        }
        if(encoded[i] !== " "){
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


var output = caesarcipher(input,2);

console.log("The output for this challenge is:")
console.log(output);
