function nTo1(number) {
    if (number === 0) return;
    console.log(number);
    nTo1(number - 1);
}

console.log(nTo1(5));
