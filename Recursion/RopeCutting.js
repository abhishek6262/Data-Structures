function maxPieces(number, a, b, c) {
    if (number === 0) return 0;
    else if (number < 0) return -1;

    const res = Math.max(
        maxPieces(number - a, a, b, c),
        maxPieces(number - b, a, b, c),
        maxPieces(number - c, a, b, c),
    );

    if (res === -1) return -1;
    return res + 1;
}

console.log(maxPieces(23, 12, 9, 11));
