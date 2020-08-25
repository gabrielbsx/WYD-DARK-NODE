//Loading modules
const express = require('express');
const http = require('http');
<<<<<<< HEAD
=======

>>>>>>> parent of fb05b5e... Implemented RoutesMgr.
const app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname+'/public'));

http.createServer((req, res) => {
    res.end('Initialize web server');
}).listen(3000);