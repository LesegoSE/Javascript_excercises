//Human age
var hum_Years = 20;

//Initial 2 cat years in human years
var intial_2_cat_yrs = 50;

//Stores the remaining human years after subtracting 2 initial Cat years from it
var rem_hum_yrs;

//Stores the calculated Cat years 
var cat_yrs;

//Removing first 2 initial years from human years
rem_hum_yrs = hum_Years - 2;

//multiplying the remaining human years by 4 to account for the cat years after the 2 initial years
rem_hum_yrs *= 4;

// adding the remaining human years with the initial 2 cat yeasr to give us the final cat years.
cat_yrs = rem_hum_yrs + intial_2_cat_yrs;

// Prints out a sentence
var sentence = 'My human age is ' + hum_Years + ' and I am ' + cat_yrs + ' years old in cat years.'
console.log(sentence);