// find the two repeating elements in a given array

function findRepeatingElements(arr) {
    const count = {};
    const repeating = [];

    for (const num of arr) {
        if (count[num]) {
            count[num]++;
        } else {
            count[num] = 1;
        }
    }

    for (const num in count) {
        if (count[num] > 1) {
            repeating.push(parseInt(num, 10));
        }
    }

    if (repeating.length !== 2) {
        throw new Error("The array does not have exactly two repeating elements.");
    }

    return repeating;
}


const array = [4, 3, 2, 7, 8, 2, 1, 7];
const result = findRepeatingElements(array);
console.log("Repeating elements:", result); // 
