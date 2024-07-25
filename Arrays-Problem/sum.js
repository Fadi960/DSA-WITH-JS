// sum of element in a given array

function sumArray(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    console.log(sum);
    return sum;
}
const arr = [1,2,3,4,5];
sumArray(arr);