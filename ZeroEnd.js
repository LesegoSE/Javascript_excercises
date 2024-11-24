/*
- Push the zeros in an array to the end of the array 
- and then order the non zero numbers in ascending order
*/
var arr = [1,9,0,5,6,0,56,0,5,0,9];
//main function
function solution() {
    
    var nonZeros = []; //stores non-zero numbers
    var zeros =[]; //stores zeros only
    var len = arr.length; //stores the size of the array
    
    //loops through the array
    for (i = 0; i < len; i++){
        //Creates a Array with no Zero's
        if (arr[i] !== 0) {
            nonZeros.push(arr[i]);
        }// nonZeros
        //Creates a Array with Zero's only
        if(arr[i] == 0) {
            zeros.push(arr[i]);
        }// Identifying Zeros
    }//Loop
    nonZeros.sort((a,b) => a-b); //sorts the array in ascending order
    return nonZeros.concat(zeros); //concatenates 2 arrays and then returns the result
}

console.log(solution(arr)); // displays results to the console