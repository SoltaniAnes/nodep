const express=require("express");
const path= require('path');
const router=require("./routes");
const mustache=require('mustache-express');
const app=express();

app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views','./views');

app.use(express.static(path.join(__dirname, '/public')));
app.use("/",router);
app.listen(3000)
