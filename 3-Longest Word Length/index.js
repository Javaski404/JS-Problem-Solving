const sentence = 'JavaScript is really powerful';

function LongestWordLength (str) {
  return str.split(" ").reduce((acc, cur) => acc.length > cur.length ? acc.length : cur.length, 0);
}

console.log(LongestWordLength(sentence));