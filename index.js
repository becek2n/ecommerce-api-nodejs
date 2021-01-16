require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3001;
var fs = require("fs");
const fileUpload = require('express-fileupload');

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({ extended: true, })
);
// enable files upload
app.use(fileUpload({
    createParentPath: true
}));

//read assets image
app.use(express.static(__dirname));
app.use(cors());

app.get("/", (req, resp) => {
    resp.json({ info : "node started" })
});


var routesUser = require('./Routes/Route'); //importing route
routesUser(app); 


app.listen(process.env.APP_PORT, () => {
console.log(`App running on port ${process.env.APP_PORT}.`)
})

