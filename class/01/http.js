const http = require('http');

let server = http.createServer((request, response) => {
    console.log(request.url);

    response.write("<h1>hello world</h1>");
    response.end();
})

server.listen(1234);