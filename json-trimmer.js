var fs = require("fs");

// Add the path to your source file and add a name for your output file below.
let source = './source-file.json'
let output = 'output-file.json'

fs.readFile(source, 'utf-8', (err, data) => {
    if (err) throw err;
    
    json = data
    // delete json["features"]["properties"]["Company"]

    str = JSON.stringify(json);

    // Add appropriate regex below to replace the keys you need.
    str = str.replace(/Company/g, "C");
    str = str.replace(/State/g, "St");
    str = str.replace(/PADD/g, "P");
    str = str.replace(/Source/g, "Sr");
    str = str.replace(/Data_Perio/g, "D");
    json = JSON.parse(str);
    
    fs.writeFile(output, json, 'utf8', (err) => {
        if (err) throw err;
        console.log(`Trimmed JSON from ${source} written to ${output}!`);
    });
    
});



  
  