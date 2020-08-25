//Loading modules
const express = require('express');
const http = require('http');
const app = express();
const routes = require('./src/Routes/RoutesMgr')

app.set('view engine', 'ejs');

app.use(express.static(__dirname+'/public'));

http.createServer((req, res) => {
    res.end('Initialize web server');
}).listen(3000);