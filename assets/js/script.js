//  Wait for the DOM to finish loading before ruuning the game

// Get the Button elements and add eventlisteners to them

document.addEventListener("DOMContentLoaded", function (){ 
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("you clicked submit");
            } else {
                let gameType = this.getAttribute("data-type");
                alert("you clicked `${gameType}`");
            }
        })
    }

})

/**
 * The main game "loop", is called when the script is first loaded
 * and after the user's answer has been proccessed
 */

function runGame() {
    // Create two random numbers between 1 and 25

    let num1 = Math.floor(Math.random() * 25) +1;
    let num2 = Math.floor(Math.random() * 25) +1;

}


function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubstractQuestion() {

}

function displayMultiplyQuestion() {

}