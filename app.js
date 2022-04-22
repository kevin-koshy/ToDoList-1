const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.use("view-engine", "ejs");

app.listen(3000, function(){
    console.log("Server started on port 3000");
});

app.get("/", function(req, res){

    var today = new Date();
    var currentDay =today.getDay();
    var day = "";

    if (currentDay ===6 || currentDay===0){
        day = "weekend";
        res.render("list",{kindOfDay:day});
    }
    else{
        day ="weekday";
        res.render("list",{kindOfDay:day});
    }

});