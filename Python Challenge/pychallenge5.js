/*
The challenge here is to input data into a url, fetch the response and input that to repeat the process.

http://www.pythonchallenge.com/pc/def/linkedlist.php?nothing=

nothing=12345
and the next nothing is 44827

Answer:
*/

const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));
var url = "http://www.pythonchallenge.com/pc/def/linkedlist.php?nothing=12345";
const getOptions = { method: "GET"};

const getResponse = async () => {
    const response = await fetch(url,getOptions);
    console.log(response);
};

getResponse();
 
