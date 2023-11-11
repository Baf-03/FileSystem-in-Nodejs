const fs = require("fs");
const PORT = 5001;
const http = require('http')

//using readfileSync is basically synchronous operation matlab ap ka code is line pr akar hold karae ga
// const txt = fs.readFileSync("demo.text","utf-8");
// console.log(txt)


//thats y we use readFile it is asynchronous operation
fs.readFile("demo.text","utf-8",(err,text)=>{
    console.log(text)
})

//making server on node js 
const server = http.createServer((req,res)=>{
    res.setHeader("Dummy","Dummyheader")
    res.end("<h1>hello</h1>")
    
})
server.listen(PORT)
