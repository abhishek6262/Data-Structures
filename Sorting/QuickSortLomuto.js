let nums = [1, 88, 9, 55, 65, 8, 5, 2, 12, 64, 73];

function partition(items, low, high) {
  let i = low,
    j = low - 1;

  for (; i < high; i++) {
    if (items[i] <= items[high]) {
      [items[i], items[j + 1]] = [items[j + 1], items[i]];
      j++;
    }
  }

  [items[i], items[j + 1]] = [items[j + 1], items[i]];

  return j + 1;
}

function quickSort(items, low, high) {
  if (low < high) {
    const p = partition(items, low, high);
    quickSort(items, low, p - 1);
    quickSort(items, p + 1, high);
  }

  return items;
}

const items = quickSort(nums, 0, nums.length - 1);
console.log(items);
