/*
Find rare characters in the mess below
Answer: equality
*/

const fs = require('fs');
var message = "";

fs.readFile('py3source.txt',(error, msg) => {
    if(error) throw error;
    message = msg.toString();
    message = message.replace(/[.&!_#%@*+?^${}()|[\]\\]/g,"");
    message = message.replace(/(\r\n|\n|\r)/gm,"");

    console.log("The cleaned up message is " + message);
    
})