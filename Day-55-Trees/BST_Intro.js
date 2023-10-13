// Start by defining a node
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Then, defining the BST
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
}

// Instantiate a new tree
const tree = new BinarySearchTree();
// Define the root node
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);

console.log(tree);
