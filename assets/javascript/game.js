// set the letters to be guessed
var alphabet = [];

for (var i = 0; i < 26; i++) {
    alphabet[alphabet.length] = String.fromCharCode(97 + i);
}

// declare variables
var win = 0;
var lose = 0;
var guesses = 9;

// declare a variable for the letters guessed
var lettersguessed = [];

// declare a variable for the key pressed
var userGuess;

// declare a variable for the computer's letter
var theletter = alphabet[Math.floor(Math.random() * alphabet.length)];

// get the key that the users selects
    document.onkeyup = function (event) {

//clear the win or lose mesasge
        document.getElementById('status').innerHTML="";
     

    // declare the users guess and make it lowercase
        userGuess = String.fromCharCode(event.keyCode).toLowerCase();


        //check the users guess and display incorrect letters chosen
        if (userGuess !== theletter && lettersguessed.indexOf(userGuess) < 0 && alphabet.indexOf(userGuess) >= 0) {
            lettersguessed[lettersguessed.length] = userGuess;
            guesses--;
        }
 
    // IF userGuess == computerGuess: 
        // wins +1
        // RESET guessesLeft TO 9
        // RESET ARRAY OF alreadyGuessed
        // COMPUTER SHOULD RE-PICK A RANDOM LETTER

        //if the user guesses the correct letter 
        if (userGuess == theletter) {
            win++;
            guesses = 10;
            alreadyGuessed = [];
            theletter = alphabet[Math.floor(Math.random() * alphabet.length)];
            document.getElementById('status').innerHTML="You Won! The Letter was " + theletter;
        }


        //if the user reaches 0 guesses
        if (guesses == 0) {
            lose++;
            guesses = 10;
            lettersguessed= [];
            computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
            document.getElementById('status').innerHTML="You Lost! The Letter was " + theletter;
        }
        

    // display wins, loses, letters and guesses
        document.getElementById('win').innerHTML = 'Number of Wins ' + win;
        document.getElementById('lose').innerHTML = 'Number of Losses:' + lose;
        document.getElementById('guesses').innerHTML = 'Remaining Guesses:  ' + guesses;
        document.getElementById('lettersguessed').innerHTML = 'You Already guessed: ' + lettersguessed.join(' ');

    } 
