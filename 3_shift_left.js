// Given an array, shift all values one position to the left.  Change the final position to 0. Return the changed array
// Predicted Output: shiftLeft([1,2,3,4,5]) should return [2,3,4,5,0];

function shiftLeft(arr){
    arr.shift();
    arr.push(0);
    return(arr)
}
var resultArr = shiftLeft([1,2,3,4,5]);
console.log(resultArr);