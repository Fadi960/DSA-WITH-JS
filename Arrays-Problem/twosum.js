// solve the two sum problem


const twoSum = (nums, target) => {
    const PREV_VALUES = new Map()
    const LEN= nums.length
    for(let i=0; i<LEN; i++){
        const NEEDED_VALUE = target - nums[i]
        if(PREV_VALUES.has(NEEDED_VALUE)){
            return [i, PREV_VALUES.get(NEEDED_VALUE)]
        }else {
            PREV_VALUES.set(nums[i], i)
        }
    }
}

console.log(twoSum([2,7,11,15], 9));