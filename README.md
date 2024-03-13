# Terminal-Guessing-Game



Here is the write-up of the number guessing game code with explanations, formatted for a README.md file to be used on GitHub:

# Number Guessing Game in JavaScript

A simple, interactive number guessing game that runs in the terminal using Node.js.

## Game Description

This number guessing game prompts the user to guess a randomly generated number between 1 and 100. After each guess, the game provides feedback indicating whether the guess was too high, too low, or correct.

## Code Explanation

Below is the JavaScript code for the game, with comments explaining how each part works:

```javascript
// Require the readline-sync library for synchronous input/output
const readline = require('readline-sync');

// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;
// Variable to store the user's guess
let guess;

// Welcome message for the player
console.log('Welcome to the number guessing game!');
console.log('I am thinking of a number between 1 and 100.');

// The do-while loop will run at least once and repeat after each incorrect guess
do {
    // Prompt the user for a guess and store it in the variable 'guess'
    guess = readline.question('Enter your guess: ');
    // Convert the guess to a number
    guess = Number(guess);

    // Check if the guess is equal to the random number
    if (guess === randomNumber) {
        console.log('Congratulations! You guessed the right number!');
    } 
    // If the guess is lower than the random number, provide a hint
    else if (guess < randomNumber) {
        console.log('Too low! Try again.');
    } 
    // If the guess is higher than the random number, provide a hint
    else if (guess > randomNumber) {
        console.log('Too high! Try again.');
    } 
    // If the input was not a number, inform the user
    else {
        console.log('That does not seem to be a valid number, try again.');
    }
// Continue the loop until the user guesses the correct number
} while (guess !== randomNumber);

// End of the game message
console.log('Game over, thank you for playing!');
```

Setup and Execution

To run this game, you will need to have Node.js and the readline-sync package installed on your system. Follow the setup instructions provided to get started.

Setup Instructions

Install Node.js from the official website or use Homebrew if you are on a Mac.
Navigate to the directory containing your game script in the terminal.
Install the readline-sync package by running npm install readline-sync.

How to Run the Game
Execute the script with Node.js in the terminal by typing node your-guessing-game-file.js, making sure to replace your-guessing-game-file.js with the actual filename of your script.

Enjoy the game, and may the odds be ever in your favor!


