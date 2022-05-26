const list = {
  A: ["B", "E"],
  B: ["A", "F", "C"],
  C: ["B", "F", "D"],
  D: ["C", "G", "H"],
  E: ["A", "F", "I"],
  F: ["B", "C", "E", "G", "J"],
  G: ["F", "D", "K"],
  H: ["D"],
  I: ["E", "J"],
  J: ["F", "L"],
  K: ["G", "M"],
  L: ["J", "M"],
  M: ["K", "L"],
};

const dijkstra = (graph, start, end) => {
  if (!(start in graph) || !(end in graph)) return [];

  let prev = {},
    dist = {},
    queue = [];
  for (let key in graph) {
    dist[key] = Infinity;
    prev[key] = null;
  }
  queue.push(start);
  dist[start] = 0;
  while (queue.length) {
    const current = queue.pop();

    for (let neightboor of graph[current]) {
    }
  }
  console.log(dist, prev, queue);
};

console.log(dijkstra(list, "A", "B"));
