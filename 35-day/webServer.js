const HTTPModule = require("http")
const port = 3333
let HTTPServer = HTTPModule.createServer()
HTTPServer.on('request', (request, response) => {
    console.log("request recieved")
    console.log(request.method)
    let url = request.url
    switch (url) {
        case '':
            response.write("<h1>Hello,this is home page</h1>")
            break;

        case '/home':
            response.write("<h1>Hello,this is home page</h1>")
            break;
        case '/about':
            response.write("<h1>Hello,this is about page</h1>")
            break;
        case '/contact':
            response.write("<h1>Hello,this is contact page</h1>")
            break;

        default:
            response.write("<h1>404</h1>")

    }
    response.end()

})
HTTPServer.listen(port, () => {
    console.log(`server started on port: ${port}`)
})