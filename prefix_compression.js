// Sample Input 0

// abcdefpr
// abcpqr

// Sample Output 0

// 3 abc
// 5 defpr
// 3 pqr

// Sample Input 1

// kitkat
// kit

// Sample Output 1

// 3 kit
// 3 kat
// 0

// Sample Input 2

// puppy
// puppy

// Sample Output 2

// 5 puppy
// 0
// 0

const prefixCompression = (str1, str2) => {
  
  let prefix = getPrefix(str1, str2);

  return [[prefix.length, prefix], [(str1.length - prefix.length), str1.slice(prefix.length)], [(str2.length - prefix.length), str2.slice(prefix.length)]];
}

const getPrefix = (str1, str2) => {
  if (str1[0] !== str2[0]) return '';
  if ((str1.length === 1) || (str2.length === 1)) return str1;

  let prefix = str1[0];

  return prefix += getPrefix(str1.slice(1), str2.slice(1));
}

console.log(prefixCompression('puppy', 'puppy'));

