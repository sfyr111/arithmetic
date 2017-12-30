const test = require('./test')

/**
 * O(n^2)
 * 额外空间复杂O(1)
 * 稳定
 * @param {Array} arr 
 */
function selectionSort(arr) {
  if (arr === null || arr.length < 2) return
  for (var i = 0; i < arr.length; i++) {
    var minIndex = i // 最小index
    for (var j = i + 1; j < arr.length; j++) {
      // 从没排序的里面找，找到比minIndex 小的就把序号赋值给minIndex 最后交换
      minIndex = arr[j] < arr[minIndex] ? j : minIndex
    }
    swap(arr, i, minIndex)
  }
}

function swap(arr, n, m) {
  [arr[n], arr[m]] = [arr[m], arr[n]]
}

test(selectionSort)
