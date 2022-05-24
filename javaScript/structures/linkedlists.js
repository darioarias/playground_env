// import { SinglyLinkedList_Node as Node } from "./nodes";
const { DoublyLinkedList_Node: Node } = require("./nodes");

module.exports.DoublyLinkedList = class {
  /**
   * Default constructor to create a DoublyLinkedList
   * @param {Array} items items to start the linked list with.
   *
   * 0th element will become the head while the Nth element will become the tail
   */
  constructor(items = []) {
    Array.isArray(items)
      ? items.forEach((value) => this.append(value))
      : this.append(items);
  }

  //getters
  /**
   * Access and Modifies the *head* reference for the list
   * @returns {Node} Reference to the node in the front
   */
  get head() {
    return this.#head;
  }

  /**
   * Access and Modifies the *tail* reference for the list
   * @returns {Node} Reference to the node at the back
   */
  get tail() {
    return this.#tail;
  }

  //setters
  /**
   * @param {Node} value reference to the new head node
   */
  set head(value) {
    this.#head = value;
  }

  /**
   * @param {Node} value reference to the new tail node
   */
  set tail(value) {
    this.#tail = value;
  }

  //methods
  //adding
  //adds to the front of the list
  /**
   * Inserts a value to the front of the list
   * @param {*} value value to be inserted at the front of the list
   */
  push(value) {
    this.head = new Node(value, this.head);
    if (this.head.next) this.head.next.previous = this.head;
    if (!this.tail) this.tail = this.head;
  }

  /**
   * Adds a value at the back of the list
   * @param {*} value value to be added
   */
  append(value) {
    if (!this.tail) return this.push(value);
    let tmp = new Node(value, null, this.tail);
    this.tail.next = tmp;
    this.tail = tmp;
  }

  //removing
  /**
   * Remove the front value of the list
   * @returns {*} The value at the front of the list
   */
  pop() {
    if (!this.head) return null;
    const { value } = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.previous = null;
    }

    return value;
  }

  /**
   * Removes the value at the end of the list
   * @returns {*} the value at the end of the list
   */
  removeLast() {
    if (!this.tail) return null;
    const { value } = this.tail;
    if (this.tail === this.head) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = this.tail.previous;
      this.tail.next = null;
    }

    return value;
  }

  /**
   * Prints the list from head to tail
   */
  print() {
    if (this.head) this.head.__rec_print();
    else process.stdout.write("empty list\n");
  }

  //private fields
  /**
   * Local reference to the head-node
   * @private
   */
  #head;
  /**
   * Local reference ot the tail-node
   * @private
   */
  #tail;
};
