/**
 * 差分数组
 */
export default class DiffArray {
  constructor(nums) {
    this.diff = new Array(nums.length);
    this.diff[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
      this.diff[i] = nums[i] - nums[i - 1];
    }
    this.data = nums.slice(); // 缓存数据以便读取
    this.dirty = false; // 标记：是否进行过修改操作
  }

  change(value, i = 0, j = this.diff.length - 1) {
    const len = this.diff.length;
    if (i < 0 || i >= len || j < i || j >= len) {
      throw new RangeError('值变更区间应在数据范围内');
    }
    this.diff[i] += value;
    if (j + 1 < len) {
      this.diff[j + 1] -= value;
    }
    this.dirty = true;
  }

  getData() {
    // Lazy update
    if (this.dirty) {
      const len = this.diff.length;
      this.data[0] = this.diff[0];
      for (let i = 1; i < len; i++) {
        this.data[i] = this.data[i - 1] + this.diff[i];
      }
    }
    this.dirty = false;
    return this.data;
  }
}