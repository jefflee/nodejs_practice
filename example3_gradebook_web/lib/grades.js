var gradeBook = {
    grades: [],
    reset: function () {
        this.grades = [];
    },
    addGrade: function (newGrade) {
        this.grades.push(newGrade);
    },
    getCountOfGrades: function () {
        return this.grades.length;
    },
    getAverage: function () {
        var total = 0;
        for (var k = 0; k < this.grades.length; k++) {
            total += this.grades[k];
        }
        return total / this.grades.length;
    }
};

exports.book = gradeBook;