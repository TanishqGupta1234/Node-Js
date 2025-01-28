const fs = require("fs");
const http = require('http')
const path = require('path')
const os = require('os')
const crypto = require('crypto')
const sayhello = require('./greetings')
const math = require('./Math')
const loadsh = require('lodash')
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

// console.log('Platform:', os.platform());
// console.log('CPU Architecture:', os.arch());
// console.log('Total Memory:', os.totalmem());
// console.log('Free Memory:', os.freemem());

// const server = http.createServer((req,res)=>{
//     res.statusCode = 200
//     res.setHeader('Content-type' , 'text/plain')
//     res.end('Hello World')
// })

// server.listen(3000, ()=>{
//     console.log("Server Running at http://localhost:3000");
// })

// const hash = crypto.createHash('sha256')
// hash.update('Hello World!')
// console.log(hash.digest('hex'));

// const message = sayhello("tanishq")
// console.log(message);

// console.log( math.add(5,3));
// console.log( math.subtract(5,3));

// const numbers = [1,2,3,4,5];
// const reversed = loadsh.reverse(numbers)
// console.log(reversed);

// const readablestream = fs.createReadStream('example.txt', {encoding:'utf-8'})
// readablestream.on('data', (chunk)=>{
//     console.log(chunk);
// })

// readablestream.on('end' , ()=>{
//     console.log("Finished reading he file");
// })

// readablestream.on('error', ()=>{
//     console.error('Error', err);
// })

// const writablestream = fs.createWriteStream('output2.txt')

// writablestream.write('Hello, ')
// writablestream.write('wrold!')
// writablestream.end()
// writablestream.on('finish ', ()=>{
//     console.log('Finished writing the file');
// })

// const readablestream = fs.createReadStream('example.txt')
// const writablestream = fs.createWriteStream('example-output.txt')
// readablestream.pipe(writablestream)
// writablestream.on('finish', ()=>{
//     console.log('file copied ');

// })