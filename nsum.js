/**
 * 找出所有符合的答案
 * @param {number[]} nums 需要有序
 * @param {number} target
 * @return {number[]}
 */
export function nSumTarget (nums, n, start, target) {
  const len = nums.length;
  const res = [];
  if (n < 2 || n > len) {
    return res;
  }
  
  if (n === 2) {
    // 2Sum
    let low = start, high = len - 1;
    while (low < high) {
      const left = nums[low];
      const right = nums[high];
      const sum = left + right;
      if (sum < target) {
        while (low < high && left === nums[low]) {
          low++;
        }
      } else if (sum > target) {
        while (low < high && right === nums[high]) {
          high--;
        }
      } else { // found
        res.push([left, right]);
        while (low < high && left === nums[low]) {
          low++;
        }
        while (low < high && right === nums[high]) {
          high--;
        }
      }
    }
  } else {
    // get (n-1)Sum recursively
    for (let i = start; i < len; i++) {
      const sub = nSumTarget(nums, n - 1, i + 1, target - nums[i]);
      for (const item of sub) {
        item.push(nums[i]);
        res.push(item);
      }
      while (i < len - 1 && nums[i] === nums[i + 1]) { // 跳过重复值
        i++;
      }
    }
  }
  return res;
};

// nums.sort((a, b) => a - b);
