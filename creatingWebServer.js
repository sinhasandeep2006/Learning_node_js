
const readline = require('readline');
const fs = require('fs');
const http = require('http');
const url = require('url');
const events = require('events');


//USER DEFINED MODULES
const  replaceHtml = require('./Modules/replaceHtml');
const user =require('./Modules/user.js');
const { error } = require('console');
//THIRD PARTY MODULES / LIBRARIES

/*LECTURE 4: CODE EXAMPLE************
READING INPUT & WRITING OUTPUT
*************************************
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Please enter your naame: ", (name) => {
    console.log("You entered: "+name);
    rl.close();
})

rl.on('close', () => {
    console.log("Interface closed");
    process.exit(0);
})*/

/*LECTURE 5: CODE EXAMPLE************
READING & WRITING TO A FILE
*************************************
let textIn = fs.readFileSync('./Files/input.txt', 'utf-8'); //10min
console.log(textIn)

let content = `Data read from input.txt: ${textIn}. \nDate created ${new Date()}`
fs.writeFileSync('./Files/output.txt', content);*/


/*LECTURE 7: CODE EXAMPLE**************
READING & WRITING TO FILE ASYNCHRONOUSLY
***************************************
fs.readFile('./Files/start.txt', 'utf-8', (error1, data1) => {
    console.log(data1)
    fs.readFile(`./Files/${data1}.txt`, 'utf-8', (error2, data2) => {
        console.log(data2);
        fs.readFile('./Files/append.txt', 'utf-8', (error3, data3) => {
            console.log(data3);
            fs.writeFile('./Files/output.txt', `${data2}\n\n${data3}\n\nDate created ${new Date()}`, () => {
                console.log('File writen successfully');
            });
        })
    })
})


console.log('Reading file....');*/


/*LECTURE 8: CODE EXAMPLE**************
CREATING A SIMPLE WEB SERVER
***************************************/
// const html = fs.readFileSync('./Template/nav_for_server.html', 'utf-8')
// let products = JSON.parse(fs.readFileSync('./data/products.json', 'utf-8'))
// let productListHtml = fs.readFileSync('./Template/product-list.html', 'utf-8');
// let productDetailHtml = fs.readFileSync('./Template/product-details.html', 'utf-8');

// function replaceHtml(template, product){
//     let output = template.replace('{{%IMAGE%}}', product.productImage);
//     output = output.replace('{{%NAME%}}', product.name);
//     output = output.replace('{{%MODELNAME%}}', product.modeName);
//     output = output.replace('{{%MODELNO%}}', product.modelNumber);
//     output = output.replace('{{%SIZE%}}', product.size);
//     output = output.replace('{{%CAMERA%}}', product.camera);
//     output = output.replace('{{%PRICE%}}', product.price);
//     output = output.replace('{{%COLOR%}}', product.color);
//     output = output.replace('{{%ID%}}', product.id);
//     output = output.replace('{{%ROM%}}', product.ROM);
//     output = output.replace('{{%DESC%}}', product.Description);

//     return output;
// }
// STEP 1: CREATE A SERVER
// const server = http.createServer((request, response) => {
//     let {query, pathname: path} = url.parse(request.url, true)
//     //console.log(x);
//     //let path = request.url;
    
//     if(path === '/' || path.toLocaleLowerCase() ==='/home'){
//         response.writeHead(200, {
//             'Content-Type' : 'text/html',
//             'my-header': 'Hellow, world'
//         });
//         response.end(html.replace('{{%CONTENT%}}', 'You are in Home page'));
//     } else if(path.toLocaleLowerCase() === '/about'){
//         response.writeHead(200, {
//             'Content-Type' : 'text/html',
//             'my-header': 'Hellow, world'
//         });
//         response.end(html.replace('{{%CONTENT%}}', 'You are in About page'));
//     } else if(path.toLocaleLowerCase() === '/contact'){
//         response.writeHead(200, {
//             'Content-Type' : 'text/html',
//             'my-header': 'Hellow, world'
//         });
//         response.end(html.replace('{{%CONTENT%}}', 'You are in Contact page'));
//     } else if(path.toLocaleLowerCase() === '/products'){
//         if(!query.id){
//             let productHtmlArray = products.map((prod) => {
//                 return replaceHtml(productListHtml, prod);
//             })
//             let productResponseHtml = html.replace('{{%CONTENT%}}', productHtmlArray.join(','));
//             response.writeHead(200, {'Content-Type': 'text/html' });
//             response.end(productResponseHtml);
//         } else {
//             let prod = products[query.id]
//             let productDetailResponseHtml = replaceHtml(productDetailHtml, prod);
//             response.end(html.replace('{{%CONTENT%}}', productDetailResponseHtml));
//         }
//     } else {
//         response.writeHead(404, {
//             'Content-Type' : 'text/html',
//             'my-header': 'Hellow, world'
//         });
//         response.end(html.replace('{{%CONTENT%}}', 'Error 404: Page not found!'));
//     }
// });

//SERVER INHERITS FROM EVENTEMITTER
const server = http.createServer();

// server.on('request', (request, response) => {
//     let {query, pathname: path} = url.parse(request.url, true)
//     //console.log(x);
//     //let path = request.url;
    
//     if(path === '/' || path.toLocaleLowerCase() ==='/home'){
//         response.writeHead(200, {
//             'Content-Type' : 'text/html',
//             'my-header': 'Hellow, world'
//         });
//         response.end(html.replace('{{%CONTENT%}}', 'You are in Home page'));
//     } else if(path.toLocaleLowerCase() === '/about'){
//         response.writeHead(200, {
//             'Content-Type' : 'text/html',
//             'my-header': 'Hellow, world'
//         });
//         response.end(html.replace('{{%CONTENT%}}', 'You are in About page'));
//     } else if(path.toLocaleLowerCase() === '/contact'){
//         response.writeHead(200, {
//             'Content-Type' : 'text/html',
//             'my-header': 'Hellow, world'
//         });
//         response.end(html.replace('{{%CONTENT%}}', 'You are in Contact page'));
//     } else if(path.toLocaleLowerCase() === '/products'){
//         if(!query.id){
//             let productHtmlArray = products.map((prod) => {
//                 return replaceHtml(productListHtml, prod);
//             })
//             let productResponseHtml = html.replace('{{%CONTENT%}}', productHtmlArray.join(','));
//             response.writeHead(200, {'Content-Type': 'text/html' });
//             response.end(productResponseHtml);
//         } else {
//             let prod = products[query.id]
//             let productDetailResponseHtml = replaceHtml(productDetailHtml, prod);
//             response.end(html.replace('{{%CONTENT%}}', productDetailResponseHtml));
//         }
//     } else {
//         response.writeHead(404, {
//             'Content-Type' : 'text/html',
//             'my-header': 'Hellow, world'
//         });
//         response.end(html.replace('{{%CONTENT%}}', 'Error 404: Page not found!'));
//     }
// })
server.listen(8000, '127.0.0.1', () => {
        console.log('Server has started!');
    })

// let myEmitter = new user(); 
// myEmitter.on('userCreated',(id,name)=>{
//     console.log(`A new user ${name} with the ID ${id} is created!`);
// })
// myEmitter.on('userCreated',(id,name)=>{
//     console.log(`A new user ${name} with the ID ${id} in database!`);
// })
// myEmitter.emit('userCreated',101,'jhon');


//  learn the creating own steam
server.on('request',(req,res)=>{
    let rs = fs.createReadStream('./files/input.txt');
    rs.on('data',(chunk)=>{
        res.write(chunk);
        res.end();
    })
    rs.on('error',(error)=>{
        rs.end(error.message);
    })
})