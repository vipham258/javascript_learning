/**
 *  @fileOverview Using file-IO to read and collect 5 records from a CSV file. Create 5 object in memory with that 5 records.
 *  Sort the objects by CheeseID and ManufacturerProvCode.
 *  @author       Vi Thi Phuong Pham
 */

//import fs, readline

const { sortByID, sortByProvCode } = require("./sort");
const fs = require("fs");
const readline = require("readline");

//0 CheeseId,
//1 CheeseNameEn,
//2 CheeseNameFr,
//3 ManufacturerNameEn,
//4 ManufacturerNameFr,
//5 ManufacturerProvCode,
//6 ManufacturingTypeEn,
//7 ManufacturingTypeFr,
//8 WebSiteEn,
//9 WebSiteFr,
//10 FatContentPercent,
//11 MoisturePercent,
//12 ParticularitiesEn,
//13 ParticularitiesFr,
//14 FlavourEn,
//15 FlavourFr,
//16 CharacteristicsEn,
//17 CharacteristicsFr,
//18 RipeningEn,
//19 RipeningFr,
//20 Organic,
//21 CategoryTypeEn,
//22 CategoryTypeFr,
//23 MilkTypeEn,
//24 MilkTypeFr,
//25 MilkTreatmentTypeEn,
//26 MilkTreatmentTypeFr,
//27 RindTypeEn,
//28 RindTypeFr,
//29 LastUpdateDate
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

let path = "canadianCheeseDirectory.csv";
let max = 5;
let counter = 0;

//regex expression for (,)
const regex = /,(?=(?:[^"]*"[^"]*")*[^"]*$)/;

//create an array of rows
let rows = [];

// read row data from file
let readFile = fs.createReadStream(path);

let rl = readline.createInterface({ input: readFile });

rl.on("line", d => {
  //put the line into an array
  let totalRow = d.split(regex);

  //loop through to get selected columns
  let row = [];
  for (const col of columnIndex) {
    row.push(totalRow[col]);
  }
  rows.push(row);

  if (counter++ >= max) {
    //stop reading
    rl.close();
    rl.removeAllListeners();
  }
});

rl.on("close", () => {
  // finished reading, turn rows into records
  // console.log(rows);

  //put the first array of rows into header(column names)
  let header = rows[0];
  // remove weird character in front of CheeseId
  header[0] = header[0].slice(1);

  //put the leftover data into data array
  let data = rows.slice(1);

  //convert rows into objects
  /** @type {CheeseRecord[]} */
  const records = data.map(rowData => {
    //create object obj
    const cheeseRecord = {};
    //for each header, put data into object
    header.forEach((headerName, colIndex) => {
      cheeseRecord[headerName] = rowData[colIndex];
    });

    return cheeseRecord;
  });
  //console.log(records);

  //Sort cheese objects by cheeseID
  sortByID(records);
  //Sort cheese object by cheese ProvCode
  sortByProvCode(records);
});
