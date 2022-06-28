const arr = [20, 10, 5, 50, 40, 25];
let largest = arr[0];
let secondLargest = -1;

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
    } else if (arr[i] !== largest) {
        if (secondLargest === -1 || arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }
}

console.log(secondLargest);
