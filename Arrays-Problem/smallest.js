// find the smallest and second smallest element in an array

function findSmallestAndSecondSmallest(arr) {
    if (arr.length < 2) {
        throw new Error("Array must contain at least two elements.");
    }

    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (const num of arr) {
        if (num < smallest) {
            // Update both smallest and second smallest
            secondSmallest = smallest;
            smallest = num;
        } else if (num > smallest && num < secondSmallest) {
            // Update second smallest only
            secondSmallest = num;
        }
    }

    // Check if second smallest was updated
    if (secondSmallest === Infinity) {
        throw new Error("Array does not have a second distinct smallest element.");
    }

    return { smallest, secondSmallest };
}


const array = [7, 10, 4, 3, 15, 20];
const result = findSmallestAndSecondSmallest(array);
console.log("Smallest element:", result.smallest);
console.log("Second smallest element:", result.secondSmallest);
