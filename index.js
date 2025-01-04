// const fs = require('fs')
// console.log('Before function')
// fs.readFile('fs.txt', 'utf-8',(err,data)=>{
//     console.log(err,data)
// })
// console.log('after function')


//server created
const http = require('http')
const fs = require('fs')
const myserver = http.createServer((req, res)=>{
    const log = `${new Date()}:requested\n`
    fs.appendFile('log.txt', log, ()=>{})
    console.log('Requested')
    res.end('Kon hai be !!!')
})

myserver.listen(8080,()=>{
    console.log('Server created')
})