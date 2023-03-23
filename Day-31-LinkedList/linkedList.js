class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
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
  insertLastNode(data) {
    let node = new Node(data);
    let currentNode;

    //If head is empty then assign it to the node
    if (!this.head) {
      this.head = node;
    } else {
      currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    this.size++;
  }
  // Insert data at an index
  insertAtIndex(data, index) {
    // if there's no index then return nothing
    if (index > 0 && index > this.size) {
      return;
    } else if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    const node = new Node(data, this.head);
    let currentNode, previousNode;

    // Set the current node to the first (head)
    currentNode = this.head;
    let count = 0;
    while (count < index) {
      previousNode = currentNode; // Node before the index
      count++;
      currentNode = currentNode.next; // Node after the index
    }

    node.next = currentNode;
    previousNode.next = node;

    this.size++;
  }
  // Get the node at an index
  getTheNode(index) {
    let currentNode = this.head;
    let count = 0;
    while (currentNode) {
      if (count === index) console.log(currentNode);
      count++;
      currentNode = currentNode.next;
    }
  }

  // Print list data
  printListData() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
}
const linked = new LinkedList();
linked.insertFirstNode(100);
linked.insertFirstNode(200);
linked.insertFirstNode(300);
linked.insertLastNode(400);
linked.insertAtIndex(500, 1);
linked.getTheNode(2);

linked.printListData();

console.log(linked);
