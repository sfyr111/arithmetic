/**
 * 人为规定0位置 === -1
 * @param {String} s1 
 * @param {String} s2 
 * @return {Number}
 */
function getIndexOf(s1, s2) {
  if (s1 === null || s2 === null || s2.length < 1 || s1.length < s2.length) return -1
  var str1/*string[]*/ = s1.split('')
  var str2/*string[]*/ = s2.split('')
  var i1 = 0
  var i2 = 0
  var next/*[]*/ = getNextArray(str2)
  while (i1 < str1.length && i2 < str2.length) {
    if (str1[i1] === str2[i2]) {
      i1++
      i2++
      // next 数组是str2变化而来的
      // str1[i1] 和 str2[i2] 没陪上，next[i2] === -1，i2就是0位置，那么我们让str1[i1 + 1] 继续和str2[i2]配
    } else if (next[i2] === -1/*人为规定0位置为-1*/) {
      // next[i2] === -1, ℹ2是 0位置, 那么继续让i1 + 1 与这个i2 比
      i1++
    } else {
      // [----, ----|i1] str1
      // [----, ----|i2] str2
      //       [----|i2, ----] i1 和 i2 都没配上，i2 跳到前匹配的最后以为滑动整体数组位置继续和str1 配
      i2 = next[i2] // ℹ2 进入下一个 ℹ2 的位置，i1 不动，i2变化
    }
  }
  // ℹ2到头了 那么就配出了, 位置就是当前i1 - i2
  return i2 === str2.length ? i1 - i2 : -1
}

/**
 * 人为规定0位置 === -1， 1位置 === 0
 * O(m*n) => O(m) 
 * @param {String[]} str
 * @return {Number[]}
 */
function getNextArray(strArr) {
  if (strArr.length === 1) return Array.of(-1) // [-1] 人为第0位 -1
  var next/*Number[]*/ = new Array(strArr.length) // 值为undefined
  next[0] = -1 // 人为
  next[1] = 0 // 人为
  /**
   * [----|a|, ----|b|i] a和b 比较，比较不对
   * [--|c|--|a|, ----|b|i] c和b 比较 。。。
   * 这个跳到的a c 位置就是cn
   */
  var i = 2 // i 位置 
  var cn = 0 // 跳到的位置
  while (i < next.length) { // i++ cn++
    // i-1 就是b， cn就是跳到的位置, 两者相等那么要求的就出来了, 两者自增继续
    if (strArr[i - 1] === strArr[cn]) {
      // b === a ++cn === i
      next[i++] = ++cn // 长度是++cn 例(i-1 = b)===(cn = a)
    } else if (cn > 0) { // cn++ i不变
      // 没配上 cn 由a 位置跳到c 位置, 为啥可以这样跳，因为strArr[i - 1] === strArr[cn] 时 next[i] = cn, 这里位置的值相等那么这样跳没毛病
      cn = next[cn]
      // cn <= 0
    } else { // i++ cn不变
      // cn 跳到0 位置了
      next[i++] = 0
    }
  }
  return next
}

let str = 'abcabcababaccc'
let match = 'ababa' 
console.log(getIndexOf(str, match))
