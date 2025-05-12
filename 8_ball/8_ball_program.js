var userInput = "Should I go back to school?"; //Variable holding the users response
var ballResponses = ['Better not tell you now.', 'Signs point to yes', 'Outlook not so good', 'My sources say no', 'My reply is no.', 'Cannot predict now', 'Reply hazy try again', 'Concentrate and ask again.']; //Array holding 8 ball responses.
var randomNum = Math.floor(Math.random() * ballResponses.length); //Generates a random number between 0 and 7

console.log(ballResponses[randomNum]);