// Bear , Gun & Human game

var choices = ["BEAR", "GUN", "HUMAN"];
var userInput, cpuInput ;

// receiving user input

function getUserInput(uInput)
{
    uInput = uInput.toUpperCase();
   
    if (uInput == choices[0]) {
        return uInput;
    } else if (uInput == choices[1]) { 
        return uInput;
    } else if (uInput == choices[2]){
        return uInput;
    } else {
        return " ***** Incorrect choice *****";
    }
    
};

userInput = getUserInput("gun");

console.log("User Input: " + userInput);

// CPU choice

function getCpuChoice() 
{
    return choices[Math.floor(Math.random() * 3)];
}

cpuInput = getCpuChoice();

console.log("User Input: " + cpuInput);