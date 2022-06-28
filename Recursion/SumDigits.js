function sumDigits(number) {
    if (number <= 9) return number;

    const remainder = number % 10;
    const dividend = Math.floor(number / 10);
    
    return remainder + sumDigits(dividend);
}

console.log(sumDigits(9987));
