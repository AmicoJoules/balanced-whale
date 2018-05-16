"use strict"

const localIP = require("local-ip");
const iface = "eth0";

const express = require("express");
const app = express();

app.get("/", (req, res) => {
    localIP(iface, function(err, ip){
        res.send(`Hello! I'm ${ip}`);
    });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));