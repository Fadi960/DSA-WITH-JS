// find the missing number in an array


let arr = [1,2,3,5,6]
let total = ((arr.length+1)*(arr.length+2)) /2;
console.log(total);
for(let i=0; i<arr.length; i++){
   total = total - arr[i];
}
console.log(total);