const fs = require("fs");
const readline = require("readline");

let path =
  "C:\\Users\\vipha\\Desktop\\study\\Computer 4\\Language\\Exercise 3\\CST8333 19F Dataset Loader\\CST8333 19F Dataset Loader\\canadianCheeseDirectory.csv";
let max = 5;
let counter = 0;

//open the file
//read the file
//because I dont want to read the whole file, read stream
//use readline

let readFile = fs.createReadStream(path);
let rl = readline.createInterface({ input: readFile });
rl.on("line", data => {
  console.log(data);
  if (counter++ >= max) {
    //stop reading
    rl.close();
    rl.removeAllListeners();
  }
});
