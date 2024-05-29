// Array excercises

// Creating an array
var movies = [ 'Avengers Endgame', 'One Punch Man', 'Blue Beetle', 'Huanted House', 'Tsotsi', 'Fantastic Four' ];
console.log('\n Array elements: ' + movies);

// Adding new records to the end of the array
var mov = 'Toy Story';
var mov1 = 'Fast and The Furious';
movies.push(mov, mov1);
console.log('\n After adding new movie to the array\n =======================');
console.log('Added movies: ' + mov + ', ' + mov1);
console.log(' Array elements: ' + movies);

// Removing last element of the array
var lstElmnt = movies.shift();
console.log('\n After removing last element of the array\n =======================');
console.log(' Dropped movie: ' + lstElmnt + '\n Array elements: ' + movies + '\n');

// Adding new element to the front of the array
var frstElmnt = 'Robot Boi';
movies.unshift(frstElmnt);
console.log('\n After adding element to the begining of an array\n =======================');
console.log(' Added movie: ' + frstElmnt + '\n Array elements: ' + movies + '\n');