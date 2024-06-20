const readline = require('readline');
const fs = require('fs');
const http = require('http');

let show =fs.readFileSync('./basis_templates/nav_for_server.html','utf-8')
const server = http.createServer((req, res) => {
    // res.end(show);
    // console.log(show);
    // console.log(req);
    // console.log(res);
    let path = req.url;
    if(path==='/' || path.toLocaleLowerCase()==='/home'){
        res.writeHead(200,{
            'content-type':'text/html',
            'my-header':'hellow,world, i myself created this header'
        });
        res.end(show.replace('{{%content%}}','you are in home page'));
}else if( path.toLocaleLowerCase()==='/about'){
    res.writeHead(200,{
        'content-type':'text/html',
        'my-header':'hellow,world, i myself created this header'
    });
    res.end(show.replace('{{%content%}}','you are in about page'));

}
else if( path.toLocaleLowerCase()==='/content'){
    res.writeHead(200,{
        'content-type':'text/html',
        'my-header':'hellow,world, i myself created this header'
    });
    res.end(show.replace('{{%content%}}','you are in content page'));

}
else{res.writeHead(404,{
    'content-type':'text/html',
    'my-header':'hellow,world, i myself created this header'
});
    res.end(show.replace('{{%content%}}','page not found'));
}
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Server started');
});
