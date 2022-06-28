function checkPalindrome(arr, left, right) {
    if (arr[left] !== arr[right]) return false;
    else if (left >= right) return true;

    return checkPalindrome(arr, left + 1, right - 1);
}

const arr = ['a', 'b', 'b', 'c', 'b', 'b', 'a'];
console.log(checkPalindrome(arr, 0, arr.length - 1));
