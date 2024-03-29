class Node {
  constructor(data, pointer = null) {
    this.data = data;
    this.pointer = pointer;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  // Insert the first node
  insertFirstNode(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }
  // Insert the last node
  insertTheLastNode(data) {
    if (!this.head) {
      this.head = new Node(data, this.head);
    } else {
      let currentNode = this.head;
      while (currentNode.pointer) {
        currentNode = currentNode.pointer;
      }
      currentNode.pointer = new Node(data);
    }
    this.size++;
  }
  // Insert data at an index
  insertAtIndex(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    } else if (index >= this.size || index < 0) return null;
    else if (index === 0) {
      this.head = new Node(data, this.head);
      this.size++;
      return;
    }
    let count = 0;
    let currentNode = this.head;
    let previousNode;
    const node = new Node(data, this.head);
    while (count < index) {
      previousNode = currentNode;
      currentNode = currentNode.pointer;
      count++;
    }
    node.pointer = currentNode;
    previousNode.pointer = node;
    this.size++;
  }
  // Get the node at an index
  getNodeAtIndex(index) {
    if (index >= this.size || index < 0) return null;
    let count = 0;
    let currentNode = this.head;
    let previousNode;
    while (count < index) {
      previousNode = currentNode;
      currentNode = currentNode.pointer;
      count++;
    }
    return currentNode;
  }
  // Remove node at the index
  deleteNodeAtIndex(index) {
    if (index >= this.size || index < 0) return null;
    else if (index === 0) {
      this.head = null;
      this.size = 0;
      return;
    }
    let currentNode = this.head;
    let previousNode;
    let count = 0;
    while (count < index) {
      previousNode = currentNode;
      currentNode = currentNode.pointer;
      count++;
    }
    previousNode.pointer = currentNode.pointer;
    this.size--;
  }
  // Clear the list
  clearTheList() {
    this.head = null;
    this.size = 0;
  }
  // Print list data
  printTheData() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.pointer;
    }
  }
  printTheLengthOfTheList() {
    let currentNode = this.head;
    let length = 0;
    while (currentNode) {
      currentNode = currentNode.pointer;
      length++;
    }
    return length;
  }
}

const linkedList = new LinkedList();
linkedList.insertFirstNode(100);
linkedList.insertTheLastNode(200);
linkedList.insertAtIndex(4, 1);
console.log(linkedList);
console.log(linkedList.printTheLengthOfTheList());
linkedList.printTheData();
