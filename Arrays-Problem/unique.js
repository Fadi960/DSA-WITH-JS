// find the unique elements in an array

let arr = [1,2,3,5,1,3,4,5,3,2,5,4];
let result = {};
for (let i=0; i<arr.length; i++){
    if(!(arr[i] in result)){
        result[arr[i]] = 1;
    }
}
console.log(Object.keys(result));