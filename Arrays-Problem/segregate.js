// segregate 0s and 1s in an array

function segregateZerosAndOnes(arr) {
    let zeroCount = 0;

    // Count number of 0s
    for (const num of arr) {
        if (num === 0) {
            zeroCount++;
        }
    }

    // Fill the array with 0s and 1s
    for (let i = 0; i < arr.length; i++) {
        arr[i] = i < zeroCount ? 0 : 1;
    }
}


const array = [0, 1, 0, 1, 0, 1, 0, 1];
segregateZerosAndOnes(array);
console.log(array); 