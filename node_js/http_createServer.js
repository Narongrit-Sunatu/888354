var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Hello World!');
    res.write('<h1>BEW</h1>');
    res.end();
}).listen(8080,'127.0.0.1');