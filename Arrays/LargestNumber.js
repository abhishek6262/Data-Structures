const arr = [20, 10, 5, 50, 40, 25];
let number = arr[0];

for (let i = 0; i < arr.length; ++i)
    if (arr[i] > number) number = arr[i];

console.log(number);
