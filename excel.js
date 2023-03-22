let csvToJson = require('convert-csv-to-json');
var fs = require('fs');

console.log("Starting")

let json = csvToJson.fieldDelimiter(',').getJsonFromCsv('Listing.csv');
fs.writeFile("listing.json", JSON.stringify(json), function(err){
	 if(err){
		 console.log(err)
		}
	})

console.log("Finihed")



