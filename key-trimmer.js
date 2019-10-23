// Add, uncomment, or comment out passages as needed. 
// This code is intended as a starting place.

var fs = require("fs");

// Add the path to your source file and add a name for your output file below.
let source = './source-file.json'
let output = 'output-key-trim.json'

fs.readFile(source, 'utf-8', (err, data) => {
    if (err) throw err;
    
    json = data

    let str = JSON.stringify(json);

    // Add appropriate regex below to replace the keys you need.
    // str = str.replace(/Company/g, "C");

    // TODO: Figure out how to implement the notepad++ rounding trick shown in precision-trim.txt in this file instead.

    json = JSON.parse(str);
    
    fs.writeFile(output, json, 'utf8', (err) => {
        if (err) throw err;
        console.log(`Trimmed JSON from ${source} written to ${output}!`);
    });
    
});



  
  