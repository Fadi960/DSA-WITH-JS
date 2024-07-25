// maximum and minimum of an array using minimum comparison

function findMinMax(arr) {
    if (arr.length === 0) {
        throw new Error("Array cannot be empty.");
    }

    let min, max;

    if (arr.length % 2 === 0) {
        // Initialize min and max with the first pair
        min = Math.min(arr[0], arr[1]);
        max = Math.max(arr[0], arr[1]);

        // Start comparing from the third element
        for (let i = 2; i < arr.length; i += 2) {
            const localMin = Math.min(arr[i], arr[i + 1]);
            const localMax = Math.max(arr[i], arr[i + 1]);

            min = Math.min(min, localMin);
            max = Math.max(max, localMax);
        }
    } else {
        // Initialize min and max with the first element
        min = max = arr[0];

        // Start comparing from the second element
        for (let i = 1; i < arr.length; i += 2) {
            if (i + 1 < arr.length) {
                const localMin = Math.min(arr[i], arr[i + 1]);
                const localMax = Math.max(arr[i], arr[i + 1]);

                min = Math.min(min, localMin);
                max = Math.max(max, localMax);
            } else {
                // Handle the last single element
                min = Math.min(min, arr[i]);
                max = Math.max(max, arr[i]);
            }
        }
    }

    return { min, max };
}


const array = [3, 5, 1, 8, 2, 7, 4];
const result = findMinMax(array);
console.log("Minimum element:", result.min);
console.log("Maximum element:", result.max);
