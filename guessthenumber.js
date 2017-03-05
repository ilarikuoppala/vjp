
function getRandomInteger(min,max) { return Math.floor((Math.random() * max) + min)};
function compareNumbers(a,b) {return a==b};

window.onload = onPageLoad;

function onPageLoad() {
    addSubmitListener();
    correctNumber = getRandomInteger(1,10);
};

function addSubmitListener() {
    document.getElementById("button").addEventListener("click", guessTheNumber)
};
 
function validateNumber(number) {
    if ( !(Number.isInteger(number)) || parseInt(number) > 10 || parseInt(number) < 1) {
        alert("Invalid input");
        return false;
    } else {
        return true;
    }
};
function guessTheNumber() {
    var input = Number(document.getElementById("number").value);
    if (validateNumber(input)) { 
        if (compareNumbers(input,correctNumber)) {
            alert("Your guess was correct! Congratulations!");
        } else {
            alert("Your guess was incorrect! Too bad!");
        };
        correctNumber = getRandomInteger(1,10);
    };
};

