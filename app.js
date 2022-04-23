const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");

const app =  express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))

app.set("view engine", "ejs");

let items =["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.listen(3000, function(){
    console.log("Server started on port 3000");
});

app.get("/", function(req, res){

    let day = date();
    res.render("list",{listTitle:day, newListItems:items});

});

app.get("/work", function(req, res){
    res.render("list", {listTitle:"Work", newListItems:workItems})
})

app.get("/about", function(req, res){
    res.render("about");
})

app.post("/work", function(req, res){
    // let item = req.body.newItem;
    // workItems.push(item);
    // res.redirect("/")
})


app.post("/", function(req, res){
    let item = req.body.newItem;
    console.log(req.body.list);
    if (req.body.list ==="Work"){
        workItems.push(item);
        res.redirect("/work");
    }
    else {
        items.push(item);
        res.redirect("/");
    }
})