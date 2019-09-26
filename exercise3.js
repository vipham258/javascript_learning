const fs = require("fs");
const readline = require("readline");

let path = "javascript_learning\\canadianCheeseDirectory.csv";
let max = 5;
let counter = 0;
//create an array of rows
let totalRows = [];

//create an array of rows with selected columns
let rows = [];
//create header(column name)
let header = [];

//create an array of data without header
let data = [];

let readFile = fs.createReadStream(path);
let rl = readline.createInterface({ input: readFile });
rl.on("line", d => {
  //put the line into an array
  //console.log(data.split(","));
  totalRows.push(d.split(","));
  rows = [
    totalRows[0],
    totalRows[1],
    totalRows[3],
    totalRows[5],
    totalRows[6],
    totalRows[8]
  ];
  //put column names into header
  header = rows[0];
  data = rows.slice(1);
  if (counter++ >= max) {
    //stop reading
    rl.close();
    rl.removeAllListeners();
    console.log(rows);
    console.log(header);
  }
});

// var Converter = require("csvtojson").Converter;
// var converter = new Converter({});
// converter.fromFile("javascript_learning\\canadianCheeseDirectory.csv",function(err,result){
//   var csvData = JSON.stringify
//   ([
//     {resultdata : result[0]},
//     {resultdata : result[1]},
//     {resultdata : result[2]},
//     {resultdata : result[3]},
//     {resultdata : result[4]}
//   ]);
//   csvData = JSON.parse(csvData);
//   console.log(csvData);
// });
