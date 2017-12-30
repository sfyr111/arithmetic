//  for test
function comparator (arr) {
  arr.sort((a, b) => {
    return a - b
  })
}

//  for test
function generateRandomArray (maxSize, maxValue) {
  let arr = new Array((maxSize + 1) * Math.random() | 0)
  for (let i = 0; i < arr.length; i++) {
    arr[i] = ((maxValue + 1) * Math.random() - maxValue * Math.random()) | 0
  }
  return arr
}

//  for test
function copyArray (arr) {
  if (arr === null || arr === undefined) {
    return null
  }
  let res = new Array(arr.length)
  for (let i = 0; i < arr.length; i++) {
    res[i] = arr[i]
  }
  return res
}

//  for test
function isEqual (arr1, arr2) {
  if ((arr1 === null && arr2 !== null) || (arr1 !== null && arr2 === null)) {
    return false
  }

  if ((arr1 === undefined && arr2 !== undefined) || (arr1 !== undefined && arr2 === undefined)) {
    return false
  }

  if (arr1 === null && arr2 === null) {
    return true
  }

  if (arr1 === undefined && arr2 === undefined) {
    return true
  }

  if (arr1.length !== arr2.length) {
    return false
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }

  return true
}

function printArray (arr) {
  if (arr === null) {
    return
  }

  if (arr === undefined) {
    return
  }

  let str = ''
  for (let i = 0; i < arr.length; i++) {
    str += arr[i] + ' '
  } 
  console.log(str)

  console.log('\n')
}

module.exports = function main (sort) {
  let testTime = 10
  let maxSize = 100
  let maxValue = 100
  let succeed = true

  for (let i = 0; i < testTime; i++) {
    let arr1 = generateRandomArray(maxSize, maxValue)
    let arr2 = copyArray(arr1)
    sort(arr1)
    comparator(arr2)
    if (!isEqual(arr1, arr2)) {
      succeed = false
      break
    }
  }

  console.log(succeed ? 'Nice!' : 'Fucking fucked!')
  console.log('\n')

  let arr = generateRandomArray(maxSize, maxValue)
  let arr1 = copyArray(arr)
  let arr2 = copyArray(arr)
  
  sort(arr1)
  comparator(arr2)
  
  console.log('排序')
  printArray(arr1)
  console.log('系统排序')
  printArray(arr2)
  
}