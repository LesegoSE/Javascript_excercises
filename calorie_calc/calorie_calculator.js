/*
Author: Lesego Seikali
Description: Calorie calculator
Date: 2024-10-08
*/

// User input
var idealDailyCalories = 2;
var arrActualDailyCalories = [];

function inputidealDailyCalories (totalIdealDailyCalories){ // accepts user ideal daily calories input

    totalIdealDailyCalories = idealDailyCalories * 7; //calculates total ideal daily calories
    return totalIdealDailyCalories;
};

console.log(inputidealDailyCalories(idealDailyCalories))
