/*
Find rare characters in the mess below:
*/

const fs = require('fs');

fs.readFile('py3source.txt',(error, msg) => {
    if(error) throw error;
    console.log(msg)
})

