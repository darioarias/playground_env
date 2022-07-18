class BinarySearchTreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
  /**
   * Access the value of this node
   * @returns {*} the value of the node
   */
  get value() {
    return this.#value;
  }
  /**
   * @param value the value to set this node to
   */
  set value(value) {
    this.#value = value;
  }

  /**
   *  Access the left child's by reference
   * @returns reference to the left child
   */
  get left() {
    return this.#left;
  }
  /**
   * @param {BinarySearchTreeNode} value reference to set the left child to
   */
  set left(value) {
    this.#left = value;
  }

  /**
   * Access the right child's by reference
   */
  get right() {
    return this.#right;
  }
  /**
   * @param {BinarySearchTreeNode} value reference to set the right child to
   */
  set right(value) {
    this.#right = value;
  }

  get min() {
    return this.left ? this.left.min : this;
  }

  toString() {
    return `
          value: ${this.value}
      left:${this.left ? this.left.value : null} right:${
      this.right ? this.right.value : null
    }
    `;
  }

  #value;
  #left;
  #right;
}

module.exports = { BinarySearchTreeNode };
