let nums = [1, 88, 9, 55, 65, 8, 5, 2, 12, 64, 73];

function selectionSort(nums) {
    for (let i = 0; i < nums.length; i++) {
        let min_index = i;

        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[min_index]) min_index = j;
        }

        [nums[i], nums[min_index]] = [nums[min_index], nums[i]];
    }

    return nums;
}

console.log(selectionSort(nums));
