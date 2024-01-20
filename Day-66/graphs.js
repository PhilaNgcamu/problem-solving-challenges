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
    console.log(vertexTwo);
    this.adjacencyList[vertexOne] = this.adjacencyList[vertexOne].filter(
      (vertex) => vertexTwo !== vertex
    );
    this.adjacencyList[vertexTwo] = this.adjacencyList[vertexTwo].filter(
      (vertex) => vertexOne !== vertex
    );
  }
  // Removing a vertex
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      console.log(adjacentVertex, vertex);
      this.removeEdge(adjacentVertex, vertex);
    }
    delete this.adjacencyList[vertex];
  }
}

const graph = new Graph();
graph.addVertex("Dallas");
graph.addVertex("Tokyo");
graph.addVertex("Aspen");
graph.addVertex("Los Angeles");
graph.addVertex("Hong Kong");

graph.addEdge("Dallas", "Tokyo");
graph.addEdge("Dallas", "Aspen");
graph.addEdge("Hong Kong", "Tokyo");
graph.addEdge("Hong Kong", "Dallas");
graph.addEdge("Los Angeles", "Hong Kong");
graph.addEdge("Los Angeles", "Dallas");

graph.removeVertex("Aspen");

console.log(graph);
