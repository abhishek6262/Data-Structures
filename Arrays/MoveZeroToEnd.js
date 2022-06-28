const arr = [8, 5, 0, 10, 0, 0, 20];
let count = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
        let temp = arr[i];
        arr[i] = arr[count];
        arr[count] = temp;
        count++;
    }
}

console.log(arr);
