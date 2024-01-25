const ListingsDB = require("./modules/listingsDB.js");
const db = new ListingsDB();

const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express();
const HTTP_PORT = process.env.PORT || 8080;

app.use(express.json()) // for parsing application/json

require('dotenv').config()

// Add support for incoming JSON entities
app.use(bodyParser.json());
// Add support for CORS
app.use(cors());

app.get('/', (req, res) => {
    res.send(`Test the Cyclic. Pure True now! ${process.env.ABC}`);
});

db.initialize().then(()=>{
    app.listen(HTTP_PORT, ()=>{
        console.log(`server listening on: ${HTTP_PORT}`);
    });
}).catch((err)=>{
console.log(err);
});
  