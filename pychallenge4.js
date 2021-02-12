/*
One small letter, surrounded by EXACTLY three big bodyguards on each of its sides.
Answer:
*/

const fs = require('fs');
var message = "";
var output = "";
var counter = 0;

fs.readFile('py4source.txt',(error, msg) => {
    if(error) throw error;
    message = msg.toString();

    for (i = 3; i < message.length-3; i++){
        if(message[i-3] === message[i-3].toUpperCase()){counter +=1;}
        if(message[i-2] === message[i-2].toUpperCase()){counter +=1;}
        if(message[i-1] === message[i-1].toUpperCase()){counter +=1;}
            if(message[i] === message[i].toLowerCase()){counter +=1;}
        if(message[i+1] === message[i+1].toUpperCase()){counter +=1;}
        if(message[i+2] === message[i+2].toUpperCase()){counter +=1;}
        if(message[i+3] === message[i+3].toUpperCase()){counter +=1;}


        if(counter === 7){
            output += message[i];
        }
        counter = 0;
    }
    output = output.replace(/(\r\n|\n|\r)/gm,"");
    console.log("The cleaned up message is " + output);
    
})