const readline = require('readline');
const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    // res.end('hello server');
    console.log('New request');
    console.log(req);
    console.log(res);
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Server started');
});
