// const fs = require('fs');
// const http = require('http');
import fs from 'fs';
import http from 'http';

const port = process.env.PORT || 3000;

const server  = http.createServer((req, res)=>{
    
    res.setHeader('Content-Type', 'text/html')
    console.log(req.url)
    if(req.url == '/'){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html'); 
        res.end(data.toString());
    }
    else if(req.url == '/ashish'){
        res.statusCode = 200;
        res.end('<h1> This is Ashish. </h1> <p> Hey this is the way to rock the world!</p>');
    }
    else if(req.url == '/about'){
        res.statusCode = 200;
        res.end('<h1> About JSK</h1> <p> Hey this is about CodeWithHarry!</p>');
    } 
    else{
        // res.harry();
        res.statusCode = 404;
        res.end('<h1> Not Found</h1> <p> Hey this page was not found on this server</p>');
    }
    
})

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);

});