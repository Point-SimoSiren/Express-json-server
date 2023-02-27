var fs = require('fs')
const http = require('http')
const tuotteet = require('./products.json')

var server = http.createServer(function (req, res) {

    console.log('pyyntö koski tätä: ' + req.url)

    switch (req.url) {

        case "/front.js":
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            var myReadStream1 = fs.createReadStream(__dirname + '/front/front.js', 'utf8');
            myReadStream1.pipe(res);
            break;

        case "/tyyli.css":
            res.writeHead(200, { 'Content-Type': 'text/css' });
            var myReadStream1 = fs.createReadStream(__dirname + '/front/style.css', 'utf8');
            myReadStream1.pipe(res);
            break;
      
        default:
            res.writeHead(200, { 'Content-Type': 'text/html' });
            var myReadStream2 = fs.createReadStream(__dirname + '/front/index.html', 'utf8');
            myReadStream2.pipe(res);
    }
});

server.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');