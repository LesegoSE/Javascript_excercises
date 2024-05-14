// regular variable declaration
console.log('\nRegular variable decleration \n================');
var vehicle = 'VW Citi golf 1.6i';
console.log(vehicle);

// Creating new object literal
var vehicleParts = {
    part1 : 'Engine',
    part2 : 'Wheels',
    part3 : 'Doors',
    part4 : 'Headlights'
};
console.log(vehicleParts);

// Adding a new key pair using dot notation
vehicleParts.part5 = 'Windows 1';
console.log('\nAfter Adding Part 5 \n================');
console.log(vehicleParts);

// Changing object literal key pair using bracket notation
console.log('\nAfter changing Part 5 key pair \n================');
vehicleParts['part5'] = 'Rear Window';
console.log(vehicleParts);

// Adding key variable with a space in its naming
console.log('\nAfter Adding Part 6 key variable \n================');
vehicleParts['part 6'] = 'Front Window';
console.log(vehicleParts);

var vehicle1 = {
    brand : 'Volkswagen',
    model : 'Citi Golf Life',
    engine : 1.6,
    dashboardSpec : 'Old',
};
console.log(vehicle1);

var vehicle2 = {
    brand : 'Volkswagen',
    model : 'Citi Golf Velocity',
    engine : 1.4,
    dashboardSpec : 'New',
};
console.log(vehicle2);