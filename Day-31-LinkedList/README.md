<h1>linked List</h1>

- A linked list is a linear data structure (ordered collection of data)
- It can be represented by a diagram, where the head: is the working data and next: the reference to the next data.
- In simple words, a linked list consists of nodes where each node contains a data field and a reference(link) to the next node in the list.

<h2>Creating Nodes</h2>

- Reference: [linkedList.js](linkedList.js).
- Declare the Node class, which takes in 2 parameters (data, next), where _data_ is the actual working data and _next_ is the pointer to the next node.
- If there is no preceeding node set the next variable to _null_.
- Then create an instance for the node.

<h2>Creating Linked List</h2>

- Reference: [linkedList.js](linkedList.js).
- Declare the LinkedList class, which has a constructor with the head equal to null and the size equal to zero.
- Then, the class should have methods to insert data at the nodes, at a specific index, getting node at an index, removing the node at an index, clearing the list and printing the list data.
