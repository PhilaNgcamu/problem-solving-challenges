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
  insertTheLastNode() {
    if (this.head) {
      this.pointer = new Node(200);
    }
  }
}

const linkedList = new LinkedList();
linkedList.insertFirstNode(100);

console.log(linkedList);
