var die ={
    size: 6,
    totalRolls: 0,
    roll : function(){
        var result = Math.ceil(this.size * Math.random());
        this.totalRolls += 1;
        return result;
    }
};

die.name = "A Game";
exports.game = die;
exports.name2 = "Second name";