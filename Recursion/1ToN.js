function oneToN(number) {
    if (number === 0) return;

    oneToN(number - 1);
    console.log(number);
}

oneToN(5);
