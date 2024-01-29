// p35- search insert position
var searchInsert = function (nums, target) {
  function mergeSort(arr, target, left, right) {
    if (left > right) {
      return left;
    }
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] == target) return mid;
    else if (arr[mid] < target) {
      return mergeSort(arr, target, mid + 1, right);
    } else {
      return mergeSort(arr, target, left, mid - 1);
    }
  }

  return mergeSort(nums, target, 0, nums.length - 1);
};
