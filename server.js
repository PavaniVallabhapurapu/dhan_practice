const http = require('http')
const server = http.createServer((request,response) =>{
    response.writeHead(200,{'content-Type':'text/html'})
    response.write("Hello World!")
    // response.setHeader('X-Foo','bar')
    // response.write(response.url)
    response.end()
})
server.listen(8080, ()=> {
    console.log("Server is running...")
})