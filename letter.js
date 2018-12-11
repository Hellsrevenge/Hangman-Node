var letter = function (value) {
    this.value = value;
    this.guessed = false;
    this.guess = function (letter) {
        if (letter === this.value) {
            this.guessed = true;
            return true;
        }
        return false;
    };
    this.print = function () {
        if (this.guessed) {
            return this.value;
        } else {
            return "_";
        }
    }
};

module.exports = letter;
