const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const server = express();
require('dotenv').config()



//static folder
server.use(express.static(path.join(__dirname + 'public')));


//body parser
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended : false}));




require("./routes")(server);



server.listen(3001, () => {
    console.log("server is starting...server is listening on port 3001");
});