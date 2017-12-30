const test = require('./test')

/**
 * O(N*logN)
 * 额外空间复杂度O(logN)
 * 不稳定
 * @param {Array} arr 
 */
function quickSort(arr) {
  
}

function swap(arr, n, m) {
  [arr[n], arr[m]] = [arr[m], arr[n]]
}

test(quickSort)