// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.method === "GET" && req.url.startsWith('/search')) {
//     let body = "";
//     req.on("data", (chunk) => {
//       body += chunk.toString();
//     });

//     req.on("end", () => {
//       res.writeHead(200, { "Content-type": "application/json" });
//       res.end(JSON.stringify({ message: "Data Received", data: body }));
//     });
//   } else {
//     res.writeHead(404, { "content-type": "text/plain" });
//     res.end("Route Not Found");
//   }
// });

// const port = 3000;
// server.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
const http = require("http");
const url = require("url")
const querystring = require('querystring')


//route handler
const route = {
    '/' : (req,res) => {
        res.writeHead(200, {"content-type": "text/plain"})
        res.end('Welcome to home page')

    },
    '/about' : (req,res) => {
        res.writeHead(200, {"content-type": "text/plain"})
        res.end('Welcome to about page')

}, 
'/notfound' : (req,res) => {
    res.writeHead(404, {"content-type": "text/plain"})
    res.end('Page Not Found')

},
}

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/submit') {
        let data =''

        req.on('data' ,(chunk)=>{
            data += chunk
        })

        req.on('end', ()=>{
            const parseddata = querystring.parse(data)
            res.writeHead(200, {'content-type': 'application/json'})
            res.end(JSON.stringify({message:"Form data Received", parseddata}))
        })
        
    }



    // const {pathname} = url.parse(req.url)
    // if (pathname.startsWith('/user/')) {
    //     const userId = pathname.split('/')[2]
    //     res.writeHead(200, {'content-type':'text/plain'})
    //     res.end(` User id : ${userId}`)
    // }
    // else{
    //     res.writeHead(404, {'content-type':'text/plain'})
    //     res.end('route not found')
    // }
//   if (req.method === "GET" && req.url.startsWith('/search')) {


//     const queryObject = url.parse(req.url, true).query

//     res.writeHead(200,{"content-type":"application/json", 
//                 "custom-header":"Node JS Server",
//                "custom-tracking":"1234"})
//     res.end(JSON.stringify({message:'query received', queryObject}))
  
//   } else {
//     res.writeHead(404, { "content-type": "text/plain" });
//         res.end("Route Not Found");
   
//   }
//    const { pathname } = url.parse(req.url)
//    if (route[pathname]) {
//       route[pathname](req,res)
//     } else {
//         route['/notfound'](req,res)
//     }






});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
