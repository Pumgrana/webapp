/// <reference path="./typings/index.d.ts" />

import * as express_graphql from "express-graphql";
import * as express from "express";

var app = express();

app.use(express.static('public')); 

app.use('/public', express.static(__dirname + '/public'));

app.listen(4000, () => console.log("Listening on localhost:4000/public"));