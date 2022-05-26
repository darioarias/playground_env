// const { DoublyLinkedList_Node } = require("./structures/nodes");
const { DoublyLinkedList } = require("./structures/linkedlists");
const { Queue } = require("./structures/queues");

const main = () => {
  const queue = new Queue([5, 2]);
  console.log(queue.isEmpty ? "Queue is emtpy" : "Queue is not Empty");
  queue.dequeue();
  // queue.dequeue();
  console.log(queue.isEmpty ? "Queue is emtpy" : "Queue is not Empty");
  queue.print();
  // console.log(queue);
};

main();
