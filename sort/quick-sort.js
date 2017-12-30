const test = require('./test')

/**
 * O(N*logN)
 * 额外空间复杂度O(logN)
 * 不稳定
 * @param {Array} arr 
 */

function quickSort(arr) {
  if (arr === null || arr === undefined || arr.length < 2) return
  
  quickSortSub(arr, 0, arr.length - 1)
}

function quickSortSub(arr, l, r) {
  if (l < r) {
    // 随机选择一个数，人为放到最后
    swap(arr, (l + Math.random() * (r - l + 1) | 0), r) // 先把一个随机数放到最后
    var p = partition(arr, l, r)
    
    quickSortSub(arr, l, p[0] - 1) // 递归排小于区
    quickSortSub(arr, p[1] + 1, r) // 地柜排大于区
  }
}

// 划分函数
function partition(arr, l ,r) {
  var less = l - 1 // 小于区在l-1
  var more = r // 大于区就是r, r位置是人为放到r的随机数, 这个随机数就是大于区

  while(l < more) { // 当l = 大于区时 相撞结束
    // l 作为自增变量与人为放到最后一位的随机数比较
    if (arr[l] < arr[r]) {
      swap(arr, ++less, l++) // 如果自增l 小于 人为数，小于区扩大，l自增
    } else if (arr[l] > arr[r]) {
      swap(arr, --more, l) // 如果自增l 大于 人为数， 大于区扩大，l不变，继续比较调换过来的数，⚠️人为数仍然在最后一位调换的是人为数的前一位
    } else {
      l++ // 等于人为数时依然自增
    }
  }
  swap(arr, more, r) // 比较结果最后为小于人为数区，等于人为数区，大于人为数区，但是最后一位仍然是我们人为放到最后一位的随机数, 我们一直是跟这个人为随机数比较，所以我们要把这个人为放在最后一位的数放到等于区内，⚠️这时候大于区more左边第一位就是等于区，那么把大于区第一位和最后一位人为数调换就ok 了
  return new Array(less + 1, more) // 返回的是等于区的左边界和右边界
}

function swap(arr, n, m) {
  [arr[n], arr[m]] = [arr[m], arr[n]]
}

test(quickSort)