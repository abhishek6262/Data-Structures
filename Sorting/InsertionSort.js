let nums = [1, 88, 9, 55, 65, 8, 5, 2, 12, 64, 73];

function insertionSort(nums) {
    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];
        let j = i - 1;

        while (j >= 0 && nums[j] > num) nums[j + 1] = nums[j--];

        nums[j + 1] = num;
    }

    return nums;
}

console.log(insertionSort(nums));
