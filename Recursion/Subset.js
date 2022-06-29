function subset(str, current, index) {
    if (str.length === index) {
        console.log(current);
        return;
    }

    subset(str, current, index + 1);
    subset(str, current + str[index], index + 1);
}

console.log(subset("ABC", "", 0));
