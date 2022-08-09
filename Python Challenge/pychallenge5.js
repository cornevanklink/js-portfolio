/*
The challenge here is to input data into a url, fetch the response and input that to repeat the process.

http://www.pythonchallenge.com/pc/def/linkedlist.php?nothing=

nothing=12345
and the next nothing is 44827

Answer:
*/

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var url = "http://www.pythonchallenge.com/pc/def/linkedlist.php?nothing=12345";
var xhr = new XMLHttpRequest();

for (i = 0; i < 10; i++) {
  xhr.open("POST", url, false); // third parameter is sync/async
  xhr.send();
  var response = xhr.responseText;
  console.log(response);
}
