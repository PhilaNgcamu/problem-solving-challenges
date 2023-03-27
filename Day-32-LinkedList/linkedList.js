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
      this.size++;
    } else {
      let currentNode = this.head;
      while (currentNode.pointer) {
        currentNode = currentNode.pointer;
      }
      currentNode.pointer = new Node(data);
      this.size++;
    }
  }
}

const linkedList = new LinkedList();
linkedList.insertFirstNode(100);
linkedList.insertTheLastNode(200);

console.log(linkedList);
