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

userInput = getUserInput("hfhd");

console.log("User Input: " + userInput);

// CPU choice

function getCpuChoice() 
{
    return choices[Math.floor(Math.random() * 3)];
}

cpuInput = getCpuChoice();

console.log("PC Input: " + cpuInput);

// Decison logic

function makeDecision()
{   
    // User win scenarios
    if (userInput == choices[0] & cpuInput == choices[2])
        {
            return "You win!!";
        } 
    else if (userInput == choices[2] & cpuInput == choices[1]) 
        {
            return "You win!!";
        }
    else if (userInput == choices[1] & cpuInput == choices[0]) 
        {
            return "You win!!";
        }

    // CPU win scenarios
    if (cpuInput == choices[0] & userInput == choices[2])
        {
            return "CPU won!!";
        } 
    else if (cpuInput == choices[2] & userInput == choices[1]) 
        {
            return "CPU won!!";
        }
    else if (cpuInput == choices[1] & userInput == choices[0]) 
        {
            return "CPU won!!";
        }
    else if (cpuInput == userInput)
        {
            return "It is a draw!!";
        }
    else 
        {
            return " ";
        }
}


console.log(makeDecision());

