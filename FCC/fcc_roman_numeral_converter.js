/*
Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case.

Roman Numerals:
I = 1
V = 5
X = 10
L = 50
C = 100
D = 500
M = 1000

*/

function convertToRoman(num) {
  // for > 1000
  var str = "";
  var x;

  for (num; num >= 1000; num -= 1000) {
    console.log("Run")
    str += "M";
  }

  for (num; num >= 900; num -= 900) {
    console.log("Run")
    str += "CM";
  }

  for (num; num >= 500; num -= 500) {
    console.log("Run")
    str += "D";
  } 

  for (num; num >= 400; num -= 400) {
    console.log("Run")
    str += "CD";
  } 

  for (num; num >= 100; num -= 100) {
    console.log("Run")
    str += "C";
  } 

  for (num; num >= 90; num -= 90) {
    console.log("Run")
    str += "XC";
  } 

  for (num; num >= 50; num -= 50) {
    console.log("Run")
    str += "L";
  } 

  for (num; num >= 40; num -= 40) {
    console.log("Run")
    str += "XL";
  }

  for (num; num >= 10; num -= 10) {
    console.log("Run")
    str += "X";
  } 

  for (num; num >= 9; num -= 9) {
    console.log("Run")
    str += "IX";
  } 

  for (num; num >= 5; num -= 5) {
    console.log("Run")
    str += "V";
  } 

  for (num; num >= 4; num -= 4) {
    console.log("Run")
    str += "IV";
  }

  for (num; num >= 1; num -= 1) {
    console.log("Run")
    str += "I";
  } 

  console.log(str);
  return str;
}

convertToRoman(1004);
