// const { DoublyLinkedList_Node } = require("./structures/nodes");
const {
  BinarySearchTree: BST,
} = require("./structures/binary_search_trees/bst");
const { DoublyLinkedList } = require("./structures/linkedlists");
const { Queue } = require("./structures/queues");

const main = () => {
  // const queue = new Queue([5, 2]);
  // console.log(queue.isEmpty ? "Queue is emtpy" : "Queue is not Empty");
  // queue.dequeue();
  // // queue.dequeue();
  // console.log(queue.isEmpty ? "Queue is emtpy" : "Queue is not Empty");
  // queue.print();
  // console.log(queue);
  // const bst = new BST();

  let bst = new BST([
    100, 50, 150, 25, 75, 125, 175, 12, 37, 63, 87, 113, 137, 6, 18, 31, 43, 57,
    69, 93, 81, 107, 119, 131, 143, 163, 187, 157, 169, 181, 193,
  ]);
  console.log(bst.toString());
  // bst.closeAncestor(12, 14);
};

main();
``;
