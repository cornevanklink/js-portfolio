/*
The challenge here is to input data into a url, fetch the response and input that to repeat the process.

http://www.pythonchallenge.com/pc/def/linkedlist.php?nothing=

nothing=12345
and the next nothing is 44827

Answer:
*/

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const starturl = "http://www.pythonchallenge.com/pc/def/linkedlist.php?nothing=";
const getOptions = { method: "GET" };
const startQuery = "12345";
var url = starturl + startQuery;

const getResponse = async (query) => {
  for (var i = 0; i < 100; i++) {
    url = starturl + query
    const response = await fetch(url, getOptions);
    const message = await response.text();
    console.log(message);
    var query = message.replace(/\D/g,'');
    if (query < 0){
        query = safety / 2;
    }
    else{
        var safety = query;
    }
    console.log("New query is " + query);
  }
};

getResponse(12345);
