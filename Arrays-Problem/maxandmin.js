// find the max and min number in an array both with and without sorting

const array = [10, 20, 5, 40, 30];

// Sorting method
const sortedArray = [...array].sort((a, b) => a - b);
const min = sortedArray[0];
const max = sortedArray[sortedArray.length - 1];

console.log("Minimum (sorted):", min);
console.log("Maximum (sorted):", max);


const array2 = [10, 20, 5, 40, 30];

// Without sorting
let min2 = array[0];
let max2 = array[0];

for (let i = 1; i < array.length; i++) {
    if (array[i] < min2) {
        min2 = array[i];
    }
    if (array[i] > max2) {
        max2 = array[i];
    }
}

console.log("Minimum (without sorting):", min2);
console.log("Maximum (without sorting):", max2);
