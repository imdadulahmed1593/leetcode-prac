// product-of-array-except-self

var productExceptSelf = function (nums) {
  const prefix = [];

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      prefix[i] = 1;
    } else {
      prefix[i] = nums[i - 1] * prefix[i - 1];
    }
  }

  const suffix = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) {
      suffix[i] = 1;
    } else {
      suffix[i] = nums[i + 1] * suffix[i + 1];
    }
  }

  const result = [];

  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix[i] * suffix[i];
  }

  return result;
};
console.log(productExceptSelf([1, 2, 3]));
