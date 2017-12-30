const test = require('./test')
/**
 * 复杂度O(N^2)
 * 额外空间复杂度O(1)
 * 稳定性 - 相同值的顺序不变
 * @param {Array} arr 
 */
function insertionSort(arr) {
  if (arr === null || arr.length < 2) return
  for (var i = 1; i < arr.length; i++) { // 0 位置不需要插入 i 是待插入位置
    // j >= 0, j 大于 j+1 ，j的位置就向前走一个，当j<0 走完了就结束
    for (var j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
      swap(arr, j, j + 1)
    }
  }
}

function swap(arr, n, m) {
  [arr[n], arr[m]] = [arr[m], arr[n]]
}

test(insertionSort)