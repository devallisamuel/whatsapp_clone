const dotenv = require('dotenv').config()
const express = require('express');
const morgan = require('morgan');


const app = express();
const port = process.env.port|| 5000;

app.use(morgan('tiny'))

app.use("/", (req,res) => {
    res.send("hello");
});

app.listen(port, () => {
    console.log(`app is running at port:${port}`);
})