// 58. length of last word
var lengthOfLastWord = function (s) {
  return s.trimEnd().split(" ").pop().length;
};
