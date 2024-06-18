var randomBdyPrt = ['hair', 'eyes', 'hands', 'teeth', 'nails'];
var randomAdj = ['nice', 'beautiful', 'lovely', 'cute'];
var randomWords = ['You have', 'I like your', 'I am in love with your'];

var bodyPrt = randomBdyPrt[Math.floor(Math.random() * 5)];
var adj = randomAdj[Math.floor(Math.random() * 4)];
var word = randomWords[Math.floor(Math.random() * 3)];

console.log(word + " " + adj + " " + bodyPrt);