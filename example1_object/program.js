var die = require("./die").game

die.size = 10;
console.log(die.roll());
console.log(die.roll());
console.log(die.roll());
console.log("total rolls:"+die.totalRolls);
console.log(die);

var die2 = require("./die").game
console.log(die2.roll());
console.log(die2.roll());
console.log(die2.roll());
console.log("total rolls:"+die2.totalRolls);
console.log(die2);