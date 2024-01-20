// Use an adjacency list

// We're building an undirected graph
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }
}

const graph = new Graph();
graph.addVertex("Tokyo");
console.log(graph);
