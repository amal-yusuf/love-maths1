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




function runGame() {

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