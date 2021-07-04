const fs = require("fs");

// Here fs is core module.

// Creating a new file

// fs.writeFileSync("read.txt", "Welcome to my world"); 

// fs.appendFileSync("read.txt", " Hi my name is Ravi");

// node js includes an additional data type called buffer
// (not available in brower's javascript).
// Buffer is mainly used to store binary data,
// While reading from file and receiving packets over the network.  

const buf_data = fs.readFileSync("read.txt");

org_data= buf_data.toString();

console.log(org_data);

// rename the file 

fs.renameSync("read.txt", "readwrite.txt");