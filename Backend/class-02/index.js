///////////// fs 

// const fs = require("fs");
// fs.writeFileSync("product.js", "console.log('Eid Mubarak!')");

// console.log("dir ----------- ",__dirname);
// console.log("dir ----------- ",__filename);

///////////////// create basic server

// const http = require("http");

// http.createServer((req, res) => {
//   res.write("<h1>Http Response by Arsheen</h1>")
// }).listen(8000, ()=>console.log("Server is Running on port 8000")
// )

// const server = http.createServer((req, res) => {
//   res.write("<h1>Http Response by Arsheen</h1>");
//   res.write("<h1>2 - Http Response by Arsheen</h1>");

//   res.end();
// })

// server.listen(8000, () => console.log("Server is Running on port 8000")
// )


//////////////// create files using terminal

// console.log(process.argv[2]);
// console.log(process.argv[3]);
// console.log(process.argv[4]);


//////// blocking task --- synchronous
//////// non-blocking task --- Asynchronous

const fs = require("fs");
const file = process.argv;

// fs.writeFileSync(file[2], `---------- ${file[3]}`);
// fs.unlinkSync(file[2]);


// if (file[2] === "add") {
//   fs.writeFileSync(file[3], `---------- ${file[4]}`);
// } else if (file[2] === "remove") {
//   fs.unlinkSync(file[3]);
// } else {
//   console.log("Invalid Input!");

// }

/////////////////////// 

// fs.writeFile("file1.txt" , "Hello bacho " , (err,data)=>{} );

// const data = fs.readFileSync("file1.txt", "utf-8");
// console.log(data);


// fs.readFile("file1.txt", "utf-8", (err,data)=> {
//   if(err) console.log(err);
//   console.log(data);
// }
// )



