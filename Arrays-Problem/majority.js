// majority element in an array

const findMajorityElement = (array) => {
    let candidate = null;
    let count = 0;

    // First pass: Find the candidate
    for (const num of array) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    // Second pass: Verify the candidate
    count = 0;
    for (const num of array) {
        if (num === candidate) {
            count++;
        }
    }

    return (count > array.length / 2) ? candidate : null;
};

const array = [3, 3, 4, 2, 4, 4, 2, 4, 4];
const majorityElement = findMajorityElement(array);
console.log("Majority element:", majorityElement);
