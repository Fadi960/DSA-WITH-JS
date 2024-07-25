// median of two sorted arrays

function findMedianSortedArrays(nums1, nums2) {
    const m = nums1.length;
    const n = nums2.length;

    // Ensure nums1 is the smaller array
    if (m > n) {
        [nums1, nums2] = [nums2, nums1];
        [m, n] = [n, m];
    }

    let iMin = 0, iMax = m, halfLen = Math.floor((m + n + 1) / 2);

    while (iMin <= iMax) {
        const i = Math.floor((iMin + iMax) / 2);
        const j = halfLen - i;

        if (i < m && nums2[j - 1] > nums1[i]) {
            iMin = i + 1; // i is too small
        } else if (i > 0 && nums1[i - 1] > nums2[j]) {
            iMax = i - 1; // i is too big
        } else {
            let maxLeft, minRight;
            
            if (i === 0) {
                maxLeft = nums2[j - 1];
            } else if (j === 0) {
                maxLeft = nums1[i - 1];
            } else {
                maxLeft = Math.max(nums1[i - 1], nums2[j - 1]);
            }

            if ((m + n) % 2 === 1) {
                return maxLeft;
            }

            if (i === m) {
                minRight = nums2[j];
            } else if (j === n) {
                minRight = nums1[i];
            } else {
                minRight = Math.min(nums1[i], nums2[j]);
            }

            return (maxLeft + minRight) / 2.0;
        }
    }

    throw new Error("Input arrays are not sorted");
}


const nums1 = [1, 2];
const nums2 = [3, 4];
console.log("Median:", findMedianSortedArrays(nums1, nums2)); 
