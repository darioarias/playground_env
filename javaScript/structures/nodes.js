module.exports.DoublyLinkedList_Node = class {
  /**
   * Default Constructor used to create a DoublyLinkedList_Node
   * @param {*} value The value for the node
   * @param {DoublyLinkedList_Node} next Reference to the next node
   * @param {DoublyLinkedList_Node} prev Reference to the Previous Node
   */
  constructor(value = null, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.previous = prev;
  }

  // Getters
  /**
   * Access and Modifies the *<i>value</i>* of a node
   * @returns {*} the data in the node
   */
  get value() {
    return this.#value;
  }

  /**
   * Access and Modifies the *next-node* reference of a node
   * @returns {DoublyLinkedList_Node} a reference to the *next*-node reference
   */
  get next() {
    return this.#next;
  }

  /**
   * Access and Modifies the *previous-node* reference of a node
   * @returns {DoublyLinkedList_Node} a reference to the *previous*-node reference
   */
  get previous() {
    return this.#previous;
  }

  // Setters
  /**
   * @param {*} value the new data for the value of the node
   */
  set value(value) {
    this.#value = value;
  }

  /**
   * @param {DoublyLinkedList_Node} value the reference to the new node
   */
  set next(value) {
    this.#next = value;
  }

  /**
   * @param {DoublyLinkedList_Node} value the reference to the new node
   */
  set previous(value) {
    this.#previous = value;
  }

  // Methods/Helpers
  /**
   * Converts the current Node-object into a string of the form--{ value: String, next: String }
   * @returns {String} string representation of the node
   */
  toString() {
    return `{ value: ${this.#stringyfy(this.value)}, next: ${
      this.next ? this.#stringyfy(this.next.value) : "null"
    } }`;
  }

  /**
   * Recursively prints out the value for each node starting at the calling node.
   *
   * STDO-format:
   *
   * {value: String, next: String} <-> {value: String, next: String}
   *
   * (caller) <-> (caller.next) ... (last_node_in_chain)
   */
  __rec_print() {
    process.stdout.write(`${this.toString()}${this.next ? " <-> " : "\n"}`);
    if (this.next) this.next.__rec_print(true);
  }

  //privates fields
  /**
   * local value for the node
   * @private
   */
  #value;
  /**
   * local reference to the *next*-node
   * @private
   */
  #next;
  /**
   * local reference to the *previous*-node
   * @private
   */
  #previous;

  /**
   * converts the data (value) of a node into a string
   * @param {*} node_data data in node to be converted into a string
   * @returns {String} Node's data as a string
   */
  #stringyfy(node_data) {
    if (!node_data) return node_data;
    if (typeof node_data === "object") return "<obj>";

    if (node_data === Object(node_data)) {
      return node_data;
    }

    try {
      return node_data.toString();
    } catch {
      return "<hidden>";
    }
  }
};
