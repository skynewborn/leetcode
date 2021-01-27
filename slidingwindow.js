/**
 * Find some pattern of {t} in {s}
 * @param {*} s 
 * @param {*} t 
 */
var slidingWindow = function(s, t) {
  // Init map
  const map = new Map();
  const win = {};
  for (let i = 0; i < t.length; i++) {
    const count = map.get(t[i]) || 0;
    map.set(t[i], count + 1);
    win[t[i]] = 0;
  }

  let left = 0;
  let right = 0;
  let valid = 0;
  while (right < s.length) {
    const c = s[right]; // The char to move into window
    right++;
    // TODO 更新窗口内的相关数据

    // debug
    console.log("[%d, %d)", left, right);

    while (1) { // TODO 填入窗口需要收缩的条件
      if (valid === map.size) {
        res.push(left);
      }
      const d = s[left]; // The char to move out of window
      left++;
      // TODO 更新窗口内的相关数据

      // debug
      console.log("[%d, %d)", left, right);
    }
  }
  // ...
};
