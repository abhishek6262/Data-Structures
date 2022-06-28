const arr = [1,2,3,4,5];
const number = 3;

for (let i = 0, j = 0; i < arr.length; i++, j++) {
    if (arr[i] === number) j++;
    arr[i] = arr[j];
}

console.log(arr);
