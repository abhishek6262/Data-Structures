const items = [2, 4, 1, 8, 0, 6, 3];

const merge = function (arr, left, right) {
  const temp = [];
};

const mergeSort = function (arr, left, right) {
  if (left < right) {
    const mid = left + (right - left) / 2;
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, right);
  }
};

console.log(mergeSort(items, 0, items.length - 1));
