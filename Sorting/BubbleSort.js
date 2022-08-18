let nums = [1, 88, 9, 55, 65, 8, 5, 2, 12, 64, 73];

function bubbleSort(nums) {
    for (let i = 0; i < nums.length; i++) {
        let noSwap = true;
        for (let j = 0; j < nums.length - i - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j + 1], nums[j]] = [nums[j], nums[j + 1]];
                noSwap = false;
            }
        }
        if (noSwap) break;
    }

    return nums;
}

console.log(bubbleSort(nums));
