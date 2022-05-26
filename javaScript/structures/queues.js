const { DoublyLinkedList: List } = require("./linkedlists");

class QueueProtocol {
  /**
   * Base class for every queue, uses the starter items to set some default values
   * @param {*} items items used to initiate the child class
   */
  constructor(items) {
    this.isEmpty = !(Array.isArray(items) && !(items.length > 0)
      ? false
      : Boolean(items));
  }

  /**
   * Checks if the queue is empty.
   * @param {Boolean} rhs the current state of the queue
   * @returns {Boolean} whether or not the queue is empty
   */
  get isEmpty() {
    return this.#isEmpty;
  }

  set isEmpty(value) {
    this.#isEmpty = value;
  }

  /**
   * Inserts an element into the queue. Returns true if the operation was successful.
   * @param {*} value the value to be inserted into the queue
   * @returns {Boolean} Whether the operation was successful
   */
  enqueue(value) {}

  /**
   * Removes the element with the highest priority and returns it. Returns nil if the queue was empty.
   * @returns {*} the value removed
   */
  dequeue() {}

  //private fields
  #isEmpty;
}

class PriorityQueue extends QueueProtocol {
  constructor() {}

  //Private Fields
  #elements;
}

class Queue extends QueueProtocol {
  /**
   * Default constructor for Queue.
   * @param {Array} items array containig the started values for the queue
   */
  constructor(items = []) {
    super(items);
    this.list = new List(items);
  }

  /**
   * Returns a reference to the first value in the queue
   * @param {List} value a reference to the new head of the list
   * @returns {List} Reference to the first value
   */
  get list() {
    return this.#list;
  }

  /**
   * Returns the element at the front of the list Returns null if the queue was empty.
   * @returns {*} value at the front of the list
   */
  get peek() {
    const { list } = this;
    return list.head ? list.head.value : null;
  }

  set list(value) {
    this.#list = value;
  }

  enqueue(value) {
    const { list } = this;
    this.isEmpty = false;
    list.append(value);
    return true;
  }

  dequeue() {
    const { list } = this;
    let value = list.pop();
    if (!list.head) this.isEmpty = true;
    return value;
  }

  print() {
    const {
      list: { head },
    } = this;

    process.stdout.write("[");
    const helper = (root) => {
      if (!root) return;
      process.stdout.write(`${root.value}${root.next ? ", " : ""}`);
      if (root.next) helper(root.next);
    };

    helper(head);
    process.stdout.write("]\n");
  }

  //Private Fields
  #list;
}

module.exports = { Queue, PriorityQueue };
