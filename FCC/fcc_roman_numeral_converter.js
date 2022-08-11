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
  for (num; num >= 1000; num -= 1000) {
    console.log("Run")
    str += "M";
  }

  // for

  // if > 1000

  // if > 500

  console.log(str);
  return num;
}

convertToRoman(1001);
