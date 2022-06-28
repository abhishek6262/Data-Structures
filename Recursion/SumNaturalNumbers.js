function sumNaturalNumbers(number) {
    if (number === 0) return 0;
    return number + sumNaturalNumbers(number - 1);
}

console.log(sumNaturalNumbers(5));
