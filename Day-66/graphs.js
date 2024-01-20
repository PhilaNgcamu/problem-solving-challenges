// Use an adjacency list

// We're building an undirected graph
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  // Add Vertex
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  // Adding an edge
  addEdge(vertexOne, vertexTwo) {
    if (this.adjacencyList[vertexOne]) {
      this.adjacencyList[vertexOne].push(vertexTwo);
    }
    if (this.adjacencyList[vertexTwo]) {
      this.adjacencyList[vertexTwo].push(vertexOne);
    }
  }
  removeEdge(vertexOne, vertexTwo) {
    this.adjacencyList[vertexOne] = this.adjacencyList[vertexOne].filter(
      (vertex) => vertexOne !== vertex && vertex !== vertexTwo
    );
    this.adjacencyList[vertexTwo] = this.adjacencyList[vertexTwo].filter(
      (vertex) => vertexOne !== vertex && vertex !== vertexTwo
    );
  }
}

const graph = new Graph();
graph.addVertex("Dallas");
graph.addVertex("Tokyo");
graph.addVertex("Aspen");

graph.addEdge("Aspen", "Dallas");
graph.addEdge("Tokyo", "Dallas");

graph.removeEdge("Tokyo", "Dallas");

console.log(graph);
