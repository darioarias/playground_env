const { SinglyLinkedList: List } = require("../structures/linkedlists");

const mergeList = (list1, list2) => {
  if (!list1) return list2;
  if (!list2) return list1;

  let result;
  if (list1.value <= list2.value) {
    result = list1;
    list1 = list1.next;
  } else {
    result = list2;
    list2 = list2.next;
  }
  result.next = null;
  result.next = mergeList(list1, list2);
  return result;
};

var mergeKLists = function (lists = [], left = 0, right = lists.length - 1) {
  if (right - left == 0) return lists[left];
  let mid = Math.floor((left + right) / 2);
  return mergeList(
    mergeKLists(lists, left, mid),
    mergeKLists(lists, mid + 1, right)
  );
};

let lists = [
  new List([1, 4, 5]).head,
  new List([1, 3, 4]).head,
  new List([2, 6]).head,
];

// console.log(lists);
mergeKLists(lists).__rec_print();
