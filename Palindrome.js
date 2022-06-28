"use strict";

const isPalindrome = function (s) {
    let left = 0, right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++, right--;
    }
    
    // for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    //     if (s[i] !== s[j]) return false;
    // }

    return true;
}

console.log(isPalindrome("aabaa"));
