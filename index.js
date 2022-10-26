const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const Pusher = require("pusher-js");

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('hello!');
});

server.listen(port,hostname, () => {
    console.log('im here!');
    Pusher.logToConsole = true;

    var pusher = new Pusher('10c93286078a36c239e2', {
      cluster: 'sa1'
    });

    var channel = pusher.subscribe('my-channel');
    channel.bind('node-pusher', function(data) {
        console.log(JSON.stringify(data));
    });
});