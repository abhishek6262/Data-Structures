const arr = [10, 20, 20, 30, 30, 30, 30];

for (let i = 1, cursor = 1; i < arr.length; i++) {
    if (arr[i] !== arr[cursor - 1]) {
        arr[cursor] = arr[i];
        cursor++;
    }
}

console.log(arr);
