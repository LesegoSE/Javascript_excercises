// Array excercises

// Creating an array
var movies = [ 'Avengers Endgame', 'One Punch Man', 'Blue Beetle', 'Huanted House', 'Tsotsi', 'Fantastic Four' ];
console.log(movies);

// Adding new records to the last element of the array
movies.push('Toy Story');
console.log('\n After adding new movie to the array\n =======================')
console.log('\n Array elements: ' + movies);

// removing last element of the array
var frstElmnt = movies.shift();
console.log('\n After removing last element of the array\n =======================')
console.log(' Dropped movie: ' + frstElmnt + '\n Array elements: ' + movies + '\n');