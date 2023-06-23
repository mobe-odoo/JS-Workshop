// Generate a random number between 1 and 25
const randomNumber = Math.floor(Math.random() * 25) + 1;
const maxTries = 5;

let noOfGuesses = 0;

function checkGuess() {
  const userGuess = parseInt(document.getElementById('guessInput').value);
  noOfGuesses++;

  const triesLeft = maxTries - noOfGuesses;

  const resultElement = document.getElementById('result');
  const triesLeftElement = document.getElementById('triesLeft');

  if (userGuess === randomNumber) {
    resultElement.textContent = `Correct guess! It took you ${noOfGuesses} trials.`;
    triesLeftElement.textContent = ''; // Clear tries left
  } else if (userGuess < randomNumber) {
    resultElement.textContent = 'Too low! Try again.';
  } else {
    resultElement.textContent = 'Too high! Try again.';
  }

  if (triesLeft === 0) {
    resultElement.textContent = `Out of tries! The number was ${randomNumber}.`;
    triesLeftElement.textContent = ''; // Clear tries left
  } else {
    triesLeftElement.textContent = `Tries left: ${triesLeft}`;
  }
}
