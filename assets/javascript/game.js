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

// show the letter in the console for testing
console.log('The correct letter is: ' + theletter);

// get the key that the users selects
    document.onkeyup = function (event) {

    // declare the users guess and make it lowercase
        userGuess = String.fromCharCode(event.keyCode).toLowerCase();


    // IF userGuess IS INCORRECT 
        // STORE USER'S GUESS TO alreadyGuessed ARRAY
            // REPEATED LETTERS MAY NOT BE COUNTED IN alreadyGuessed
        // SUBTRACT guessesLeft BY 1
        // *userGuess MUST BE A LETTER, NOT ANY OTHER KEY*
        if (userGuess !== theletter && lettersguessed.indexOf(userGuess) < 0 && alphabet.indexOf(userGuess) >= 0) {
            lettersguessed[lettersguessed.length] = userGuess;
            guesses--;
        }
 
    // IF userGuess == computerGuess: 
        // wins +1
        // RESET guessesLeft TO 9
        // RESET ARRAY OF alreadyGuessed
        // COMPUTER SHOULD RE-PICK A RANDOM LETTER
        if (userGuess == theletter) {
            win++;
            guesses = 9;
            alreadyGuessed = [];
            theletter = alphabet[Math.floor(Math.random() * alphabet.length)];
            console.log('You win! The new letter is: ' + theletter);

        }

    // IF guessesLeft REACHES 0:
        // losses +1
        // RESET guessesLeft TO 9
        // RESET ARRAY OF alreadyGuessed TO 0
        // COMPUTER SHOULD RE-PICK A RANDOM LETTER
        if (guesses == 0) {
            lose++;
            guessesLeft = 10;
            lettersguessed= [];
            computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
            console.log('You lose! Computer: ' + theletter);


        }

    // display wins, loses, letters and guesses
        document.getElementById('win').innerHTML = 'Number of Wins ' + win;
        document.getElementById('lose').innerHTML = 'Number of Losses:' + lose;
        document.getElementById('lettersguessed').innerHTML = 'Remaining Guesses: ' + lettersguessed.join(' ');
        document.getElementById('guesses').innerHTML = 'You Already guessed: ' + guesses;

    } 
