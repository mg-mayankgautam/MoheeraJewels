
require("dotenv").config();

const path = require('path');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 4700;

const bodyparser = require('body-parser');//use with axios 

const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');



app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.json()); 
app.use(bodyparser.json({ limit: "50mb" }));
app.use(bodyparser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(express.json());


app.use(cors(
    {
        // origin: process.env.FRONTEND_URL, 
        // origin: 'https://covendx.com', 
        origin: "http://localhost:3000",
        // origin: '*',
        credentials: true,
        withCredentials: true
    }
))

app.use((req, res, next) => {
    res.setHeader(
        "Access-Control-Allow-Origin",
        // "https://covendx.com"
        "http://localhost:3000"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS"
    );
    next();
})



const AuthRouter = require('./routes/authentication.js');
app.use('/', AuthRouter);





mongoose.connect(process.env.MONGODB_URL, {
    //    useNewUrlParser: true,
    //    useUnifiedTopology: true,
    // useCreateIndex: true
})
    .then(() => {
        app.listen(PORT, () => {
            console.log(`http://localhost:` + PORT);
        })
    })
    .catch(err => { console.error(err); });