/**
 * 数组 => 二叉树 i = 数组序号
 * left: 2 * i + 1
 * right: 2* i + 2
 * parent: (i - 1) / 2 | 0
 * 算法种的堆 => 完全二叉树
 * 大根堆 => 任何一颗树🌲的头部值最大, 只追求每一个最大的都是头部
 */
const test = require('./test')

function heapSort(arr) {
  if (arr === null || arr === undefined || arr.length < 2) return
  for (var i = 0; i < arr.length; i++) {
    heapInsert(arr, i) // 上来先全部扫一遍, 建立大根堆
  }
}

// O(n) log21 + log22 + log23 + ... + log2N
function heapInsert(arr, index) { // 建立大根堆
  // 每次都先和parent 比
  while (arr[index] > arr[(index - 1) / 2]) {
    swap(arr, index, (index - 1) / 2)
    index = (index - 1) / 2
  }
}

function swap(arr, n, m) {
  [arr[n], arr[m]] = [arr[m], arr[n]]
}

test(insertionSort)
