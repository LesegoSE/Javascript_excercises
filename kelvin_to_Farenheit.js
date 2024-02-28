'Variables'
var kelvinTemp = 301;
var celciusTemp;
var fahrenheit;

'Converts the Kelvin temperature reading to Celcius reading'
celciusTemp = kelvinTemp - 273.15;

'Calculates fahrenheit temperature value'
fahrenheit = celciusTemp * (9 / 5) + 32;

'Rounds down the value of Fahrenhight'
fahrenheit = Math.floor(fahrenheit);


console.log("The temperature is " + fahrenheit + " degrees");