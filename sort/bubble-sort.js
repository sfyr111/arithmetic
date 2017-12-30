const test = require('./test')
/**
 * 复杂度O(N^2)
 * 额外空间复杂度O(1)
 * 稳定性 - 相同值的顺序不变
 * @param {Array} arr 
 */
function bubbleSort(arr) {
  if (arr === null || arr.length < 2) return
  // e 是最大数
  for (var e = arr.length - 1; e > 0; e--) {
    for (var i = 0; i < e; i++) {
      // 因为i < e 所以i + 1 最大为i 不会越界
      if (arr[i] > arr[i + 1]) swap(arr, i, i + 1)
    }
  }
}

function swap(arr, n, m) {
  [arr[n], arr[m]] = [arr[m], arr[n]]
}

test(bubbleSort)