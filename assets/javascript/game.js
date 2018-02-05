var wins1 = document.getElementById("wins");
var losses = document.getElementById("losses");
var guessRemaining = document.getElementById("guess-remaining");
var lettersGuessed = document.getElementById("letters-guessed");
var keyClicked;
var compChoice;
var wins = "0";
var lossCount = 0;
var guessesRemaining = 9;
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessed = [];
var keyClickedHistory = [];
var keyGuessed = false;


// Get game started, show scores at 0 and clear any array data.
roundReset();

// Basic set up of game once key is pushed.
document.onkeyup = function() {
    // Set variables for testing multiple keys and for key chosen.
    keyGuessed = false;
    keyClicked = event.key;
    
    // for loop to tell if letter has been used before
    for (i=0; i < keyClickedHistory.length; i++) {

        if (keyClicked === keyClickedHistory[i]) {
            keyGuessed = true;
        }
    }

    // if so, don't run game round

    // otherwise, run game round    
    if (keyGuessed === false){
        // Runs a game round pushing the user input as a parameter.
        decide(event.key);
    }
     
  };

  // Game round function - Main heart of game
  function decide(a) {

        // Record letter into history so as to avoid duplicate letters
        keyClickedHistory.push(a);
        guessed.push(a);

        // Logic for if the user choice matches the randomly chosen letter
        if (a === compChoice) {
            wins++
            roundReset();
        } else {
            guessesRemaining--;
        }
        // Catch for if they run out of guesses.
        if (guessesRemaining === 0) {
            lossCount++;
            roundReset();
        }
        
        // Print latest scores and guesses remaining.
        guessRemaining.textContent = guessesRemaining;
        wins1.textContent = wins;
        losses.textContent = lossCount;
        lettersGuessed.textContent = guessed;

  }

  function roundReset() {
    //Resets all arrays storing user data and prints out current scores at 0
    guessed = [];
    keyClickedHistory = [];
    compChoice = alpha[Math.floor((Math.random() * alpha.length))];
    guessesRemaining = 9;
    guessRemaining.textContent = guessesRemaining;
    wins1.textContent = wins;
    losses.textContent = lossCount;
    lettersGuessed.textContent = guessed;
  }