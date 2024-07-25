// move zeros to the end of an array and zeros to the start of an array

//end of an array

function pushZerosToEnd(arr,len){
   let count=0;

   for(let i=0; i<len; i++){
    if(arr[i]!==0){
        arr[count++] = arr[i];
    }
   }
   while(count<len){
       arr[count++] = 0;
   }
}

let arr = [1,9,0,0,2,7,0,6,0,9,8];
pushZerosToEnd(arr, arr.length);
console.log(arr);

// start of an array
function pushZerosToStart(arr2, len) {
    let count = len - 1;  // Start placing non-zero elements from the end
    console.log(count);

    // Traverse the array from the end
    for (let i = len - 1; i >= 0; i--) {
        if (arr2[i] !== 0) {
            arr2[count--] = arr2[i];
        }
    }

    // Fill the remaining positions with zeros
    while (count >= 0) {
        arr2[count--] = 0;
    }
}

let arr2 = [1, 9, 0, 0, 2, 7, 0, 6, 0, 9, 8];
pushZerosToStart(arr2, arr2.length);
console.log(arr2);

 