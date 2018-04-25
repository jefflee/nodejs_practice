////////
//  Run the program with this command: node program.js
//  Browser: http://localhost:3000
//           http://localhost:3000/grade?grades=100,60,70,80,90
////////

var book = require("./lib/grades").book;
var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.send("Hello Jeff!");
});

app.get("/grade", function (req, res) {
    //"1,2,3".split(",") -> [1,2,3]
    var grades = req.query.grades.split(",");
    for (var k = 0; k < grades.length; k++) {
        book.addGrade(parseInt(grades[k]));
    }
    var average = book.getAverage();

    res.send("Your average is " + average);
});

app.listen(3000);
console.log("Server ready...");
