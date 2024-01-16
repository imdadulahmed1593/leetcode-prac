// 443. String Compression
var compress = function (chars) {
  let index = 0;
  let i = 0;
  while (i < chars.length) {
    let j = i;
    while (j < chars.length && chars[j] === chars[i]) {
      j++;
    }
    chars[index++] = chars[i];
    if (j - i > 1) {
      let count = j - i;
      for (let digit of count.toString()) {
        chars[index++] = digit;
      }
    }
    i = j;
  }
  return index;
};
