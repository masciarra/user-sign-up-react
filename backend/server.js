const express = require('express');
const mysql = require('mysql');
var cors = require('cors');
const app = express();
var http = require('http');

function onRequest(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    module1.myFunction();
    response.end();
}

http.createServer(onRequest).listen(8000);

app.get('/api/form', (req, res) => {
    console.log("we did it!");
})