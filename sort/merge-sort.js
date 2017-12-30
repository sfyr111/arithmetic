const test = require('./test')

/**
 * T(n) = 2T(n/2) + O(n) => O(nlogn)
 * a = 2, b = n/2, d = n = 1 master 公式
 * @param {Array} arr 
 */
function mergeSort(arr) {
  if (arr === null || arr.length < 2) return
  mergeSortSub(arr, 0, arr.length - 1)
}

function mergeSortSub(arr, l, r) {
  if (l === r) return
  var mid = l + ((r - l) >> 1) // 取中分
  
  mergeSortSub(arr, l, mid)
  mergeSortSub(arr, mid + 1, r)
  merge(arr, l, mid, r)
}

function merge(arr, l, m, r) {
  var help = new Array(r - l + 1) // r 到 l 有多少数
  var i = 0
  var p1 = l
  var p2 = m + 1
  while (p1 <= m && p2 <= r) {
    help[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++]
  }
  while (p1 <= m) { // p2 撞线了
    help[i++] = arr[p1++]
  }
  while (p2 <= r) { // p1 撞线了
    help[i++] = arr[p2++]
  }
  for (var j = 0; j < help.length; j++) {
    arr[l + j] = help[j] // copy 回原数组
  }
}

test(mergeSort)