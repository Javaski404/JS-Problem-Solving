const numbers = [3, 7, 2, 9, 14, 5, 8];

function getMaxEvenNumber(arr) {
  return arr.filter((num) => num % 2 === 0)
    .reduce((acc, cur) => acc > cur ? acc : cur, 0);
}

console.log(getMaxEvenNumber(numbers));