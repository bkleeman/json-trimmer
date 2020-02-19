var fs = require('fs');

// Add the path to your source file and add a name for your output file below.
// let source = './source-file.json'
let source = './source.json'
let output = 'output-field-add.json'

fs.readFile(source, 'utf-8', (err, data) => {
    if (err) throw err;

    json = JSON.parse(data);

    for (let i = 0; i < json.features.length; i++) {
        json.features[i]['key'] = 'value';
    }

    json = JSON.stringify(json);

    fs.writeFile(output, json, 'utf-8', (err) => {
        if (err) throw err;
        console.log(`Field add to JSON from ${source} written to ${output}`)
    })
})