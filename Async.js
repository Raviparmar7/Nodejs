const fs = require("fs");

// creating a new file
/* fs.writeFile("read.txt", " Today is awesome day : )"
 ,(err) => {
        console.log("Files is created");
        console.log(err);
} ); */

// We pass them a fuction as an argument - a callback -
// The callback has an argument that tell you whether
// The operation completed successfully.
// checking for errors.

// put more data
/* fs.appendFile("read.txt", " and also everyday I live my life" ,

(err) => {
    console.log("Happy");
    console.log(err);
}); */

// how to read file

/* fs.readFile("read.txt", "UTF-8",
(err, data) => {
    console.log(data);
}); */

