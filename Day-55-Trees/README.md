# Problem Solving: Day 55 - Udemy - JavaScript Algorithms and Data Structures Masterclass

<h1>Binary Search Trees</h1>

- A data structure that consists of nodes in a parent/child relationship.
- Lists are linear but trees are non-linear. SO trees have a different parts to nodes.
- Note that if a node references to a node that is not below it, then it's not it's child. Therefore, not a tree.
- We should have one root node also.

- Tree Terminology:

  - Root - The tope node of a tree.
  - Child - A node connected to another node when moving away from the Root.
  - Parent - A converse notion of the child.
  - Siblings - Group of nodes of the same parent.
  - Leaf - A node with no children.
  - Edge - Connection between nodes

- Kinds of trees: Trees, Binary Trees and Binary Search Trees.
- Trees - Each node can have many children.
- Binary Trees - Each node can have at most two children. They are sorted in order and can store data that can be compared when working with numbers often.

- How BSTS work:
  - Each node should consist at most two children.
  - Every node at the left side of the parent node should be less than the parent.
  - Every node at the right side of the parent node should be more than the parent.
