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
  //Removing an edge
  removeEdge(vertexOne, vertexTwo) {
    this.adjacencyList[vertexOne] = this.adjacencyList[vertexOne].filter(
      (vertex) => vertexOne !== vertex
    );
    this.adjacencyList[vertexTwo] = this.adjacencyList[vertexTwo].filter(
      (vertex) => vertexOne !== vertex
    );
  }
  // Removing a vertex
  removeVertex(vertex) {
    delete this.adjacencyList[vertex];
    for (const existingVertex in this.adjacencyList) {
      if (this.adjacencyList[existingVertex]) {
        this.adjacencyList[existingVertex] = this.adjacencyList[
          existingVertex
        ].filter((vertex) => !vertex);
      }
    }
  }
}

const graph = new Graph();
graph.addVertex("Dallas");
graph.addVertex("Tokyo");
graph.addVertex("Aspen");

graph.addEdge("Aspen", "Dallas");
graph.addEdge("Tokyo", "Dallas");

graph.removeEdge("Tokyo", "Dallas");

graph.removeVertex("Dallas");

console.log(graph);
