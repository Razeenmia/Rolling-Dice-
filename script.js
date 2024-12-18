// Get references to the DOM elements
const rollButton = document.getElementById("rollButton");
const dice = document.getElementById("dice");
const dice2 = document.getElementById("dice2");

// Function to generate a random number between 1 and 6 (for a dice roll)
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

// Function to update the dice with the new values
function rollDice() {
    const roll1 = rollDie();
    const roll2 = rollDie();
    
    // Update the dice elements with the random numbers
    dice.textContent = roll1;
    dice2.textContent = roll2;
}

// Add an event listener to the roll button
rollButton.addEventListener("click", rollDice);
