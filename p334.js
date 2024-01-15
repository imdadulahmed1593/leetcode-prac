// increasing-triplet-subsequence

var increasingTriplet = function (nums) {
  let i = null;
  let j = null;

  for (const num of nums) {
    if (i == null || i >= num) {
      i = num;
      continue;
    }

    if (j == null || j >= num) {
      j = num;
      continue;
    }

    return true;
  }

  return false;
};
