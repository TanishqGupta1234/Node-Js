const fs = require("fs");
const http = require('http')
const path = require('path')
const os = require('os')
// fs.readFile("example.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data);
// });

// const content = "Hello world";

// fs.writeFile("output.txt", content, (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("File written");
// });

// const server = http.createServer((req,res)=>{
//     res.statusCode = 200
//     res.setHeader('Content-type', 'text/plain')
//     res.end('Hello World')
// })

// server.listen(3000, ()=>{
//     console.log("Server running at http://localhost:3000");
// })

// const directory = '/user/local'
// const fileName = 'example.txt'

// const fullPath = path.join(directory,fileName)
// console.log(fullPath);

console.log('Platform:', os.platform());
console.log('CPU Architecture:', os.arch());
console.log('Total Memory:', os.totalmem());
console.log('Free Memory:', os.freemem());