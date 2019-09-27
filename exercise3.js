const fs = require("fs");
const readline = require("readline");

console.log("Name: Vi Thi Phuong Pham - 040886894");

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
  totalRows.push(d.split(","));

  if (counter++ >= max) {
    //stop reading
    rl.close();
    rl.removeAllListeners();

    //loop through totalrows to get data with selected columns
    //put it into rows. So now rows is perfect data
    for (var i = 0; i <= max; i++) {
      rows.push([
        totalRows[i][0],
        totalRows[i][1],
        totalRows[i][3],
        totalRows[i][5],
        totalRows[i][6],
        totalRows[i][8],
        totalRows[i][10],
        totalRows[i][11],
        totalRows[i][12],
        totalRows[i][14],
        totalRows[i][16],
        totalRows[i][18],
        totalRows[i][20],
        totalRows[i][21],
        totalRows[i][23],
        totalRows[i][25],
        totalRows[i][27],
        totalRows[i][29]
      ]);
    }

    //put the first array of rows into header
    header = rows[0];
    //console.log(header);

    //put the leftover data into data array
    data = rows.slice(1);
    //console.log(data);

    //convert rows into objects
    const output = data.map(row => {
      //create object obj
      const obj = {};
      //for each header, put data into object
      header.forEach((h, index) => (obj[h] = row[index]));
      console.log(obj);
    });
  }
});
