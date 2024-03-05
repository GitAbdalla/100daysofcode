const HTTPModule = require("http")
const port = 3333
let HTTPServer = HTTPModule.createServer()
HTTPServer.on('request',(request,response) => {
    console.log("request recieved")
    response.write("hello client")
    response.end()

})
HTTPServer.listen(port,()=>{
    console.log(`server started on port: ${port}`)
})