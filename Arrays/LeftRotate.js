const arr = [1,2,3,4,5];

// One Digit Left Rotate
// let first = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i + 1];
// }
// arr[arr.length - 1] = first;

// console.log(arr);

// Multi Digit Left Rotate
// const digits = 2;
// let temp = [];

// for (let i = 0; i < digits; i++) {
//     temp[i] = arr[i];
// }

// for (let i = digits; i < arr.length; i++) {
//     arr[i - digits] = arr[i];
// }

// for (let i = 0; i < digits; i++) {
//     arr[i + (arr.length - digits)] = temp[i];
// }

// console.log(arr);

// Multi Digits using reverse method
const digits = 2;

const reverse = function (arr2, left, right) {    
    while (left < right) {
        const temp = arr2[left];
        arr2[left] = arr2[right];
        arr2[right] = temp;
        left++, right--;
    }

    return arr2;
}

let arr2 = [...arr];
arr2 = reverse(arr2, 0, digits - 1);
arr2 = reverse(arr2, digits, arr2.length - 1);
arr2 = reverse(arr2, 0, arr2.length - 1);

console.log(arr2);
