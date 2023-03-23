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
    return (this.head = new Node(data, this.head));
  }
  // Print list data
  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}
const linked = new LinkedList();
linked.insertFirstNode(100);
linked.insertFirstNode(200);
linked.insertFirstNode(300);

console.log(linked);
linked.printListData();
