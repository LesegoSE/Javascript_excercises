// Array excercises

// Creating an array
var movies = [ 'Avengers Endgame', 'One Punch Man', 'Blue Beetle', 'Huanted House', 'Tsotsi', 'Fantastic Four' ];
console.log('\n Array elements: ' + movies);

// Adding new records to the end of the array
var mov = 'Toy Story';
var mov1 = 'Fast and The Furious';
movies.push(mov, mov1);
console.log('\n After adding new movie to the array\n =======================');
console.log(' Added movies: ' + mov + ', ' + mov1);
console.log(' Array elements: ' + movies);

// Removing first element of the array
var frstDropElmnt = movies.shift();
console.log('\n After removing first element of the array\n =======================');
console.log(' Dropped movie: ' + frstDropElmnt + '\n Array elements: ' + movies + '\n');

// Adding new element to the front of the array
var frstAddElmnt = 'Robot Boi';
movies.unshift(frstAddElmnt);
console.log('\n After adding element to the begining of an array\n =======================');
console.log(' Added movie: ' + frstAddElmnt + '\n Array elements: ' + movies + '\n');

// Removing last element in a array
var lstDropElmnt = movies.pop();
console.log(' After removing last element of the array\n =======================');
console.log(' Dropped movie: ' + lstDropElmnt + '\n Array elements: ' + movies + '\n');

// Extracting array elements using Slice() function
var slyArr = movies.slice(1, 5);
var revSlyArr = movies.slice(-4,-1);
console.log(' Extracting element of the array in range 2 - 4\n =======================');
console.log(' Normal slice array elements: ' + slyArr);
console.log(' Reverse slice array elements: ' +  revSlyArr);

// Creating an array that stores integers
var dailyAudiance = [301, 42, 108, 500, 20, 450, 158, 76];
console.log('\n Creating numeric array\n =======================' );
console.log(' Array elements: ' + dailyAudiance );

// Creating an array
console.log('\n Numeric array sorting\n =======================');

// Numeric array sorting 
console.log( ' Ascending numeric Array elements : '+ dailyAudiance.sort(function(a, b)
{return a-b; }
));
console.log( ' Decending numeric Array elements : '+ dailyAudiance.sort(function(a, b)
{return b-a; }
));

// String array sorting
console.log('\n String array sorting\n =======================');
console.log('\n Ascending string array elements: ' + movies.sort());
console.log( '\n Descending string array elements: '+ movies.sort(function(a, b)
{return b.localeCompare(a); }
));

// Merging 2 arrays
console.log('\n Array concatenation\n =======================');
var mergeArr = dailyAudiance.concat(movies);
console.log('\n Concatenated Array elements: ' + mergeArr );