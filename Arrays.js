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
console.log('\n After removing last element of the array\n =======================');
console.log(' Dropped movie: ' + lstDropElmnt + '\n Array elements: ' + movies + '\n');

// Extracting array the elements in the range 2 - 4 using Slice() function
var slyArr = movies.slice(1, 5);
console.log(' Extracting element of the array in range 2 - 4\n =======================');
console.log(' Extraxted Array elements: ' + slyArr + '\n Extraxted Array elements (sorted): ' + slyArr.sort());
