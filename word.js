var letter = require("./letter.js");

var word = function (value) {
    this.letters = [];
    for (var i in value) {
        this.letters.push(new letter(value[i]));
    }

    this.guess = function(letter){
        var total = false;
        for (var i in this.letters) {
            if (!this.letters[i].guessed){
              if (this.letters[i].guess(letter)){
                  total=true;
              }
            }
        }
        return total;
    };

    this.print = function(){
        var string = "";
        for (var i in this.letters) {
            string += this.letters[i].print() + " ";

        }
        console.log(string);
    };
    this.is_guessed = function(){
        for (var i in this.letters) {
           if (!this.letters[i].guessed) {
               return false;
           }
        }
        return true;
    }
};

module.exports = word;
