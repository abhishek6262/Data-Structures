const number = 13;

function convertToBinary(num, arr) {
    if (num === 0) return arr;
    convertToBinary(parseInt(num / 2), arr);
    arr.push(parseInt(num % 2));
}

console.log(convertToBinary(3, []));