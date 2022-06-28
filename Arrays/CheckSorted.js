const arr = [10, 20, 30];

let isSorted = true;
for (let i = 1, j = arr.length - 1; i < j; i++, j--) {
    if (arr[i] < arr[i - 1] || arr[j - 1] > arr[j]) {
        isSorted = false;
        break;
    }
}
console.log(isSorted);

// console.time();
// let isSorted = true;
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < arr[i - 1]) {
//         isSorted = false
//         break;
//     }
// }
// console.timeEnd();
// console.log(isSorted);
