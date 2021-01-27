import Queue from './ds/Queue';

class Node {
  constructor(value, adj = []) {
    this.value = value;
    this.adj = adj;
  }
}

export function bfs(start, target) {
  const queue = new Queue();
  const visited = new Set(); // 节点访问记录，避免形成环
  queue.enqueue(start);
  visited.add(start);

  let step = 0;
  while (!queue.isEmpty()) {
    const size = queue.size();
    for (let i = 0; i < size; i++) {
      const current = queue.dequeue();
      // 判断是否到达终点
      if (current === target) {
        return step;
      }
      // 基于相邻节点，扩散下一层
      for (const node of current.adj) {
        if (!visited.has(node)) {
          queue.enqueue(node);
          visited.add(node);
        }
      }
    }
    // 更新步数
    step++;
  }
}