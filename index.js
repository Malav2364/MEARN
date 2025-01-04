// const fs = require('fs')
// console.log('Before function')
// fs.readFile('fs.txt', 'utf-8',(err,data)=>{
//     console.log(err,data)
// })
// console.log('after function')


//server created
const http = require('http')
const fs = require('fs')
const url = require('url')
const path = require('path')
const myserver = http.createServer((req, res)=>{
    const log = `${new Date()}:${req.url}requested\n`
    fs.appendFile('log.txt', log, ()=>{})
    console.log('Requested')
    switch (req.url) {
        case "/":
            fs.readFile(path.join(__dirname,'index.html'),(err, content)=>(res.end(content)))
            break;
        case "/about":
            res.end('About Page')
            break;
        case "/home":
            res.end('Welcome to Home Page')
            break;
        default:
            res.end('Not Found 404 !')
    }
})

myserver.listen(8080,()=>{
    console.log('Server created')
})