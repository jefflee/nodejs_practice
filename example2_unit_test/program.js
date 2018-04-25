////////
//  Run the program with this command: node program.js 50 60 70 80 90 100
////////

var book = require("./lib/grades").book;
for (var k = 2; k < process.argv.length; k++) {
    book.addGrade(parseInt(process.argv[k]));
}
console.log(book.getAverage());