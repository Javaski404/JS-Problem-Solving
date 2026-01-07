function countVowels(str) {
    let count = 0;
    const vowels = 'aeiou';
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log(countVowels('Open Ai')); // Output: 4
console.log(countVowels('Hello World')); // Output: 3
console.log(countVowels('JavaScript')); // Output: 3