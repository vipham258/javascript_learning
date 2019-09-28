/**
 *  @fileOverview Using file-IO to read and collect 5 records from a CSV file. Create 5 object in memory with that 5 records and print it out.
 *  @author       Vi Thi Phuong Pham
 */

//import fs, readline
const fs = require("fs");
const readline = require("readline");

//regex expression for (,)
const regex = /,(?=(?:[^"]*"[^"]*")*[^"]*$)/;

//print out my name
console.log("Name: Vi Thi Phuong Pham - 040886894");

//path to the csv file
let path = "canadianCheeseDirectory.csv";
let max = 5;
let counter = 0;

//create an array of selected column index
let columnIndex = [
  0,
  1,
  3,
  5,
  6,
  8,
  10,
  11,
  12,
  14,
  16,
  18,
  20,
  21,
  23,
  25,
  27,
  29
];

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
  totalRows.push(d.split(regex));

  if (counter++ >= max) {
    //stop reading
    rl.close();
    rl.removeAllListeners();

    //loop through totalrows to get data with selected columns
    //put it into rows. So now rows is perfect data
    for (let i = 0; i <= max; i++) {
      let row = [];
      for (const col of columnIndex) {
        row.push(totalRows[i][col]);
      }
      rows.push(row);
    }
    //put the first array of rows into header
    header = rows[0];

    //put the leftover data into data array
    data = rows.slice(1);

    //convert rows into objects
    const cheeseRecordList = data.map((rowData, rowIndex) => {
      //create object obj
      const cheeseRecord = {};
      //for each header, put data into object
      header.forEach((headerName, colIndex) => {
        cheeseRecord[headerName] = rowData[colIndex];
      });

      //print out the object
      // console.log(cheeseRecord);
      return cheeseRecord;
    });

    console.log(cheeseRecordList);
  }
});
