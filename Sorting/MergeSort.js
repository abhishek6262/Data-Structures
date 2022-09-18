const items = [2, 4, 1, 8, 0, 6, 3];

function merge(items, left, mid, right) {
  const arr1 = [],
    arr2 = [];

  for (let i = left; i <= mid; i++) arr1.push(items[i]);
  for (let i = mid + 1; i <= right; i++) arr2.push(items[i]);

  let i = 0,
    j = 0;

  for (let k = left; k <= right; k++) {
    if (i > arr1.length - 1) items[k] = arr2[j++];
    else if (j > arr2.length - 1) items[k] = arr1[i++];
    else if (arr1[i] < arr2[j]) items[k] = arr1[i++];
    else items[k] = arr2[j++];
  }

  return items;
}

function mergeSort(items, left, right) {
  if (left >= right) return;

  const mid = left + Math.floor((right - left) / 2);
  mergeSort(items, left, mid);
  mergeSort(items, mid + 1, right);
  return merge(items, left, mid, right);
}

console.log(mergeSort(items, 0, items.length - 1));
