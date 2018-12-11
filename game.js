var clc = require("cli-color");
var words = ["coffee", "sugar","cream","espresso","cappuccino","mocha"]
var inquirer = require('inquirer');
var word = require("./word.js");
var ranDom;
var testword;
var attempts = 10;
console.log(" --=========< /|\ [ - HANGMAN - ] \|/ >=========--");
console.log (clc.red(" Welcome to the hangman game! \r\n Guess a \"coffee\" word.", "\r\n you have 10 attempts to guess each word."));
newWord();

function newWord(){
    ranDom = Math.floor(Math.random() * words.length);
    testword = new word(words[ranDom]);
}
function game (){
    if (testword.is_guessed()){
        console.log(clc.green.bgRed("Good job!:-) Guess another one!"));
        newWord();
    }
    if (attempts<=0){
        console.log(clc.xterm(49)("Your moves are weak.:-( Try another word"));
        newWord();
        attempts = 10;
    }
    testword.print();
    inquirer.prompt([
        { "name": "letter",
            "message": "letter?"
        }
    ]).then(function(answer){
       if (testword.guess(answer.letter)=== false){
           attempts--;
           console.log("Attempts: " + attempts);
       }
        game();
    })
}
game();