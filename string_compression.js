// Sample Input #00

// abcaaabbb
// Sample Output #00

// abca3b3
// Sample Input #01

// abcd
// Sample Output #01

// abcd
// Sample Input #02

// aaabaaaaccaaaaba
// Sample Output #02
// a3ba4c2a4ba

// 'aa'

const stringCompression = (str, count) => {

  debugger;

  if (str.length === 0) return '';

  count++;

  if (str[0] === str[1]) {
    return stringCompression(str.slice(1), count);
  } else {
    let comprStr;
    comprStr = (count === 1) ? (str[0]) : str[0] += count.toString();
    return comprStr + stringCompression(str.slice(1), 0);
  }
}

console.log(stringCompression('abcaaabbb', 0));