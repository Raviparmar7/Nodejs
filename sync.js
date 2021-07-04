const fs = require("fs");

// fs.mkdirSync("Ravi");

// fs.writeFileSync("Ravi/bio.txt", " My name is Ravi");

// fs.appendFileSync("Ravi/bio.txt", " I am from Gujrat");

// const data = fs.readFileSync("Ravi/bio.txt", "utf8");
// console.log(data);

fs.renameSync("Ravi/bio.txt", "mybio.txt");