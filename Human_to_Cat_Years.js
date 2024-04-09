//variables
var hum_Years = 20;
var intial_2_cat_yrs = 50;

var cat_yrs;
var rem_hum_yrs;


//Removing first 2 initial years from human years
rem_hum_yrs = hum_Years - 2;


rem_hum_yrs *= 4;

cat_yrs = rem_hum_yrs + intial_2_cat_yrs;

var sentence = 'My human age is ' + hum_Years + ' and I am ' + cat_yrs + ' years old in cat years.'
console.log(sentence);