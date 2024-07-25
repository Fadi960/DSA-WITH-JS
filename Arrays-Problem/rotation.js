// array rotation

function rotateLeft(nums, k) {
    const n = nums.length;
    k = k % n; // Handle cases where k > n
    const rotated = new Array(n);

    for (let i = 0; i < n; i++) {
        rotated[(i - k + n) % n] = nums[i];
    }

    for (let i = 0; i < n; i++) {
        nums[i] = rotated[i];
    }
}


const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
rotateLeft(nums, k);
console.log(nums); 
