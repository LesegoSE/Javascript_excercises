/*
Author: Lesego Seikali
Description: Calorie calculator
Date: 2024-10-08
*/

// User input
var idealDailyCalories = 5;
var arrActualDailyCalories = [];

function inputidealDailyCalories (totalIdealDailyCalories){ // accepts user ideal daily calories input

    totalIdealDailyCalories = idealDailyCalories * 7; //calculates total ideal daily calories
    return totalIdealDailyCalories;
};

// console.log(inputidealDailyCalories(idealDailyCalories))


function inputActualDailyCaloriesByDay(day){ 
    
    if (day == "monday") {
        arrActualDailyCalories[0] = 3;
    }
    else if (day == "tuesday") {
        arrActualDailyCalories[1] = 4;
    }
    else if (day == "wednesday") {
        arrActualDailyCalories[2] = 5;
    }
    else if (day == "thursday") {
        arrActualDailyCalories[3] = 4;
    }
    else if (day == "friday") {
        arrActualDailyCalories[4] = 7;
    }
    else if (day == "saturday") {
        arrActualDailyCalories[5] = 2;
    }
    else if (day == "sunday") {
        arrActualDailyCalories[6] = 6;
    } else{ "incorrect day entered!!";} 
};

inputActualDailyCaloriesByDay('monday'); // populates the actual calorie array
inputActualDailyCaloriesByDay('tuesday'); // populates the actual calorie array
inputActualDailyCaloriesByDay('wednesday'); // populates the actual calorie array
inputActualDailyCaloriesByDay('thursday'); // populates the actual calorie array
inputActualDailyCaloriesByDay('friday'); // populates the actual calorie array
inputActualDailyCaloriesByDay('saturday'); // populates the actual calorie array
inputActualDailyCaloriesByDay('sunday'); // populates the actual calorie array

// console.log(arrActualDailyCalories);

function calcActualDailyCalories (){

    var totalActualyCalories = 0;
    for(let i = 0;i < arrActualDailyCalories.length; i++){

        totalActualyCalories += arrActualDailyCalories[i];
    }
    return totalActualyCalories;
};

// console.log(calcActualDailyCalories());