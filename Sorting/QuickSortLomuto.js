let nums = [1, 88, 9, 55, 65, 8, 5, 2, 12, 64, 73];

function partition(items, index) {
  [items[index], items[items.length - 1]] = [
    items[items.length - 1],
    items[index],
  ];

  let i = 0,
    j = -1;

  for (; i < items.length - 1; i++) {
    if (items[i] < items[items.length - 1]) {
      [items[i], items[j + 1]] = [items[j + 1], items[i]];
      j++;
    }
  }

  [items[i], items[j + 1]] = [items[j + 1], items[i]];

  return items;
}

console.log(partition(nums, 3));
