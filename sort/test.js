// for test
function comparator(arr) {
  arr.sort()
}

// for test
function generateRandomArray(maxSize, maxValue) {
  var arr = Array((maxSize + 1) * Math.random() | 0)
  for (var i = 0; i < arr.length; i++) {
    arr[i] = (((maxValue + 1) * Math.random()) | 0) - ((maxValue * Math.random()) | 0)
  }
  return arr
}

// for test
function copyArray(arr) {
  if (arr === null) return null
  resArr = Array(arr.length)
  for (var i = 0; i < arr.length; i++) {
    resArr[i] = arr[i]
  }
  return resArr
}

// for test
function isEqual(arr1, arr2) {
  if ((arr1 === null && arr2 !== null) || (arr1 != null && arr2 === null)) return false
  if (arr1 === null && arr2 === null) return true
  if (arr1.length !== arr2.length) return false
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true
}

// for test
function pringArray(arr) {
  if (arr === null) return null
  console.log(arr)
}

function main(args) {
  var testTime = 500000
  var maxSize = 100
  var maxValue = 100
  var success = true
  for (var i = 0; i < testTime; i++) {
    arr1 = generateRandomArray(maxSize, maxValue)
    arr2 = copyArray(arr1)
    bubbleSort(arr1)
    comparator(arr2)
    if (!isEqual(arr1, arr2)) {
      success = false
      break
    }
  }
  console.log(success ? 'Nice!' : 'Fucking fucked!')
  
  var arr = generateRandomArray(maxSize, maxValue)
  printArray(arr)
  bubbleSort(arr)
  printArray(arr)
}