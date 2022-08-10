// ["5", "1 4", "1 9", "3", "2 4", "3"];

class Heap {
  constructor(values = []) {
    this.values = values;
    this.hash = {};
  }

  insert(value) {
    this.values.push(value);
    if (!(value in this.hash)) this.hash[value] = this.values.length - 1;
    this.siftUp();
  }

  remove(value = this.values[0]) {
    const { values } = this;
    // let idx = values.indexOf(value);
    let idx = this.hash[value];
    this.swap(idx, values.length - 1);
    let topMost = values.pop();
    this.siftDown(idx);
    this.siftUp(idx);
    delete this.hash[value];
    return topMost;
  }

  heapify() {
    const { values } = this;
    for (let i = Math.floor(values.length / 2); i >= 0; i--) {
      this.siftDown(i);
    }
  }

  siftUp(index = this.values.length - 1) {
    const { values } = this;
    while (true) {
      let parentIdx = Math.floor((index - 1) / 2);
      if (values[parentIdx] > values[index]) this.swap(index, parentIdx);
      else break;
      index = parentIdx;
    }
  }

  peek() {
    return this.values[0];
  }

  siftDown(parentIndx = 0) {
    const { values } = this;

    while (parentIndx < values.length) {
      let candidate = parentIndx,
        leftChildIndx = 2 * parentIndx + 1,
        rightChildIndx = 2 * parentIndx + 2;

      if (values[leftChildIndx] < values[candidate]) candidate = leftChildIndx;
      if (values[rightChildIndx] < values[candidate])
        candidate = rightChildIndx;

      if (candidate === parentIndx) break;

      this.swap(candidate, parentIndx);
      parentIndx = candidate;
    }
  }

  swap(a, b) {
    const { values } = this;
    [values[a], values[b]] = [values[b], values[a]];
    this.hash[values[a]] = a;
    this.hash[values[b]] = b;
  }

  get empty() {
    return this.values.length == 0;
  }
}

const inputs = "5\n1 4\n1 9\n3\n2 4\n3";

const input2 = [50, 45, 42, 30, 32, 11];
const input3 = [50, 60, 33, 66, 88];
const input4 = [22, 44, 66, 11, 43, 33, 90, 88, 75, 100, 32, 89, 94, 9]; //O(N)

let list = [];
for (let i = 0; i < 100; i++) {
  list.push(Math.floor(Math.random() * 1000));
}

/*
                            

*/
const solution = (input) => {
  const heap = new Heap(input);
  {
    // let queries = input.split("\n");
    // let i = 1;
    // while (i < queries.length) {
    //   let [method, value] = queries[i].split(" ");
    //   if (method === "1") {
    //     heap.insert(parseInt(value, 10));
    //   } else if (method === "2") {
    //     heap.remove(parseInt(value, 10));
    //   } else console.log(heap.peek());
    //   i++;
    // }
    // heap.hash
  }
  heap.heapify();
  console.log(heap.values);
  while (!heap.empty) {
    console.log(heap.remove());
  }
};

solution(list);
