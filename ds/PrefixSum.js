export default class PrefixSum {
  constructor(nums) {
    const len = nums.length;
    this.data = new Array(len + 1);
    this.data[0] = 0;
    for (let i = 0; i < len; i++) {
      this.data[i + 1] = this.data[i] + nums[i];
    }
  }

  // 区间累加和
  query(i, j) {
    return this.data[j + 1] - this.data[i];
  }
}