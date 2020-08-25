const express = require('express');
const app = express();
const routes = require('./src/Routes/RoutesMgr');


app.set('view engine', 'ejs');

app.use(express.static(__dirname+'/public'));

app.use('/',routes);

app.listen(3000,(req, res) => {
    console.log("initialize web socket");
});

