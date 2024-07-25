// merge an array of size of size n into another array of size m+n

function mergeArrays(arr1, m, arr2, n) {
    // Initialize pointers
    let i = m - 1; // Pointer for the end of valid elements in arr1
    let j = n - 1; // Pointer for the end of arr2
    let k = m + n - 1; // Pointer for the end of merged array

    // Merge the arrays from the end
    while (i >= 0 && j >= 0) {
        if (arr1[i] > arr2[j]) {
            arr1[k--] = arr1[i--];
        } else {
            arr1[k--] = arr2[j--];
        }
    }

    // Copy any remaining elements of arr2 (if any)
    while (j >= 0) {
        arr1[k--] = arr2[j--];
    }
}

const arr1 = [1, 3, 5, 7, 0, 0, 0, 0]; // Size m + n, where m = 4 and n = 4
const arr2 = [2, 4, 6, 8];
const m = 4; // Number of initial elements in arr1
const n = 4; // Number of elements in arr2

mergeArrays(arr1, m, arr2, n);

console.log("Merged array:", arr1);
