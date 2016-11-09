const stringOPermute = str => {
  if (str.length === 2) {
    return (str[1] + str[0]);
  }

  return (str[1] + str[0]) + stringOPermute(str.slice(2));
};

console.log(stringOPermute('abcdefgh'));