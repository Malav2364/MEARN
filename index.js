// const fs = require('fs')
// console.log('Before function')
// fs.readFile('fs.txt', 'utf-8',(err,data)=>{
//     console.log(err,data)
// })
// console.log('after function')


//server created
const http = require('http')
const myserver = http.createServer(()=>{
    console.log('Requested')
})

myserver.listen(8080,()=>{
    console.log('Server created')
})