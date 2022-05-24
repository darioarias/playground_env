const { SinglyLinkedList: List } = require("../../structures/linkedlists");
/**
 * Implement mergesort such that it works with linkedlits
 */

const arr_merge = (list1 = [], list2 = []) => {
  const result = [];
  let j = 0,
    i = 0;

  for (; i < list1.length && j < list2.length; ) {
    if (list1[i] <= list2[j]) {
      result.push(list1[i++]);
    } else result.push(list2[j++]);
  }

  if (i === list1.length) {
    while (j < list2.length) result.push(list2[j++]);
  }

  if (j === list2.length) {
    while (i < list1.length) result.push(list1[i++]);
  }

  return result;
};

const arr_mergeSort = (list = [], left = 0, right = list.length - 1) => {
  if (right - left == 0) return [list[left]];

  const mid = Math.floor((left + right) / 2);
  return arr_merge(
    arr_mergeSort(list, left, mid),
    arr_mergeSort(list, mid + 1, right)
  );
};

// let arr = new Array(10).fill().map(() => Math.floor(Math.random() * 100));
// console.log("unsorted", arr);
// console.log("sorted", arr_mergeSort(arr));

const list_merge = (list1 = new List(), list2 = new List()) => {
  const result = new List();
  while (list1.head && list2.head) {
    if (list1.head.value <= list2.head.value) {
      result.append(list1.pop());
    } else result.append(list2.pop());
  }

  if (list1.head) {
    while (list1.head) result.append(list1.pop());
  }
  if (list2.head) {
    while (list2.head) result.append(list2.pop());
  }

  return result;
};

const list_mergeSort = (lists = [], left = 0, right = lists.length - 1) => {
  if (right - left == 0) return list_merge(lists[right], lists[left]);
  const mid = Math.floor((left + right) / 2);
  return list_merge(
    list_mergeSort(lists, left, mid),
    list_mergeSort(lists, mid + 1, right)
  );
};

let lists = [new List([1, 2, 3]), new List([4, 5, 6]), new List([7, 8, 9])];

// 1, 2, 3, 5, 7, 8, 9, 10, 15;

// list_mergeSort(lists).print();

// list_merge(new List([2, 5, 7]), new List([3, 4])).print();
