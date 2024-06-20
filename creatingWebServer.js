const readline = require('readline');
const fs = require('fs');
const http = require('http');

let show =fs.readFileSync('./basis_templates/learnServer.html','utf-8')
const server = http.createServer((req, res) => {
    // res.end(show);
    // console.log(show);
    // console.log(req);
    // console.log(res);
    let path = req.url;
    if(path==='/' || path.toLocaleLowerCase()==='/home'){
        res.end('you are in home page');
}else if( path.toLocaleLowerCase()==='/about'){
    res.end('you are in about page');

}
else if( path.toLocaleLowerCase()==='/content'){
    res.end('you are in content page');

}
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Server started');
});
