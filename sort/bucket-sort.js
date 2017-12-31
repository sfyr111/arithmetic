const test = require('./test')
var str = '78 119 76 75 15 66 108 25 33 130 119 68 141 6 36 72 108 64 146 112 2 52 21 128 5 107 66 89 73 104 48 127 19 70 60 137 86 38 23 79 46 55 64 7 8 21 77 4 126 26 103 110 89 101 131 121 21 3 100'

var arr = str.split(' ')

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
// console.log(arr.join(' '))
var isPosInt = true // 大于0 Positive integer
test(bucketSort, isPosInt)

