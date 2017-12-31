const test = require('./test')

// 只能排正整数数组
function bucketSort(arr) {
  if (arr === null || arr.length < 2) return
  var max = Number.MIN_SAFE_INTEGER // 先设最大数为负数最大值
  for (var i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]) // 找到当前数组的max值
  }
  
  var bucket = new Array(max + 1) // max + 1个数组桶
  for (var i = 0; i < arr.length; i++) {
    // 把arr 中的每个数放到与这个数与桶序号相同的桶内, 这个数在数组内可能会重复，每放如桶一次就记下几下, 桶中序号没有这个数的就是undefined
    bucket[arr[i]] !== undefined ? bucket[arr[i]]++ : bucket[arr[i]] = 1
  }
  // 现在数组中的数出现了多少次，都在桶内相同序号的位置记下了次数
  // 开始从桶中倒出所有数
  var i = 0
  for (var j = 0; j < bucket.length; j++) {
    // 如果桶的序号有数，则把桶中的数及序号重新放入数组中, 原来重复几次放几次
    while (bucket[j]-- > 0) { // 空桶为undefined-- > 0 === false
      arr[i++] = j
    }
  }
}

bucketSort(arr)
var isPosInt = true // 大于0 Positive integer
test(bucketSort, isPosInt)
