/**
 * 数组 => 二叉树 i = 数组序号
 * left: 2 * i + 1
 * right: 2* i + 2
 * parent: (i - 1) / 2 | 0
 * 算法种的堆 => 完全二叉树
 * 大根堆 => 任何一颗树🌲的头部值最大, 只追求每一个最大的都是头部
 * 时间复杂度O(NlogN)
 * 额外空间复杂度O(1) 仅仅是常数项大, 快排需要二分断点所以是O(logN) 堆排不需要断点
 * 快排常数项小，堆排常数项大
 * 堆排虐优先级队列
 */
const test = require('./test')

function heapSort(arr) {
  if (arr === null || arr === undefined || arr.length < 2) return
  for (var i = 0; i < arr.length; i++) {
    heapInsert(arr, i) // 上来先全部扫一遍, 建立大根堆
  }
  var size = arr.length // 堆的大小
  swap(arr, 0, --size) // 把大根堆的最上最大一位替换到最后并减小大根堆的大小
  while (size > 0) {
    heapify(arr, 0, size) // 把最大值调换到最后后成立都新大根堆
    swap(arr, 0, --size) // 再调换到最后
  }
}

// O(n) log21 + log22 + log23 + ... + log2N
function heapInsert(arr, index) { // 建立大根堆
  // 每次都先和parent 比
  while (arr[index] > arr[(index - 1) / 2 | 0]) {
    swap(arr, index, (index - 1) / 2 | 0)
    index = (index - 1) / 2 | 0
  }
}

/**
 * logN
 * @param {Array} arr 数组
 * @param {Number} index 大根堆待交换的位置，这里是最顶及最大值
 * @param {Number} size 大根堆当前大小
 */
function heapify(arr, index, size) {
  var left = index * 2 + 1 // left node 位置
  // 是否有后代node
  while (left < size) { // left node 没越界, 表示有left, right: 2*index+2 必然越界
    // right 没有越界 并且 rigth > left ? right : left 赋值给largest
    var largest = left + 1 < size && arr[left + 1] > arr[left] ? left + 1 : left
    // 找到的子节点与我们传进来的index pk
    largest = arr[largest] > arr[index] ? largest : index
    if (largest === index) break // 不用下沉，我传进来的index 比我子node 都大则不用动
    swap(arr, largest, index) // 子node 比我大 值交换
    index = largest // 交换值后再交换序号
    left = index * 2 + 1 // 从交换过的新序号位置的子node 开始循环
  }
}

function swap(arr, n, m) {
  [arr[n], arr[m]] = [arr[m], arr[n]]
}

test(heapSort)
