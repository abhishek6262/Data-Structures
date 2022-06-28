const arr = [1,2,3,4,5];
const position = 1;
const number = 3;

for (let i = arr.length; i > position; i--)
    arr[i] = arr[i - 1];

arr[position] = number;
console.log(arr);
