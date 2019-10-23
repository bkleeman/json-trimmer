var fs = require("fs");

let obj = {}

// Loop through your json and delete the fields you want to drop
// Alter the structure of the loop to fit your needs.
// This code was designed to handle nested keys within a JSON file storing geographic data
for (let i = 0; i < obj.features.length; i++) {
    // delete obj.features[i]["properties"]["C"]
}

let str = JSON.stringify(obj);

fs.writeFile('output-field-trim.json', str, 'utf8', (err) => {
    if (err) throw err;
    console.log(`Trimmed JSON written to output-field-trim.json!`);
});