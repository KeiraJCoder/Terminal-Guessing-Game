
const readline = require('readline-sync'); // Synchronous Readline for interactive conversation with the user via a console (TTY).

let randomNumber = Math.floor(Math.random() * 50) + 1;
let guess;

console.log('Welcome to the number guessing game!');
console.log('I am thinking of a number between 1 and 50.');

do {
    guess = readline.question('Enter your guess: ');
    guess = Number(guess);

    if (guess === randomNumber) {
        console.log('Congratulations! You guessed the right number!');
    } else if (guess < randomNumber) {
        console.log('Too low! Try again.');
    } else if (guess > randomNumber) {
        console.log('Too high! Try again.');
    } else {
        console.log('That does not seem to be a valid number, try again.');
    }
} while (guess !== randomNumber);

console.log('Game over, thank you for playing!');
