/*
One small letter, surrounded by EXACTLY three big bodyguards on each of its sides.
Answer: linkedlist
*/



// Declaring variables
const fs = require('fs');
var message = "";
var output = "";
var counter = 0;

fs.readFile('py4source.txt',(error, msg) => {
    if(error) throw error;
    message = msg.toString();
    message = message.replace(/(\r\n|\n|\r)/gm,"");

    for (i = 4; i < message.length-4; i++){
        if(message[i-4] === message[i-4].toLowerCase()){counter +=1;}
        if(message[i-3] === message[i-3].toUpperCase()){counter +=1;}
        if(message[i-2] === message[i-2].toUpperCase()){counter +=1;}
        if(message[i-1] === message[i-1].toUpperCase()){counter +=1;}
            if(message[i] === message[i].toLowerCase()){counter +=1;}
        if(message[i+1] === message[i+1].toUpperCase()){counter +=1;}
        if(message[i+2] === message[i+2].toUpperCase()){counter +=1;}
        if(message[i+3] === message[i+3].toUpperCase()){counter +=1;}
        if(message[i+4] === message[i+4].toLowerCase()){counter +=1;}

        
        if(counter === 9){
            output += message[i];
        }
        counter = 0;
    }

    // Removing line breaks
    output = output.replace(/(\r\n|\n|\r)/gm,"");
    console.log("The cleaned up message is " + output);
    
})