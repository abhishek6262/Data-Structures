function towerOfHanoi(number, source, auxiliary, destination) {
    if (number === 1) {
        console.log(`Move ${number} from ${source} to ${destination}`);
        return;
    }

    towerOfHanoi(number - 1, source, destination, auxiliary);
    console.log(`Move ${number} from ${source} to ${destination}`);
    towerOfHanoi(number - 1, auxiliary, source, destination);
}

console.log(towerOfHanoi(5, 'A', 'B', 'C'));
