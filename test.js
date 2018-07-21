const algorithm = require('./algorithm')

const array = [1, 3, 4, 7, 2, 5, 6, 10, 9 ,8]

let findVal = 7

// let kq = LinearSearch(array, findVal)

// if (kq !== false) {
//     console.log("Tim thay " + findVal + " tai vi tri: " + kq)
// } else {
//     console.log("Khong tim thay " + findVal + " trong mang! ")
// }

let sortedArray = algorithm.BubbleSort(array)
console.log(sortedArray)
let kq = algorithm.BinarySearch(sortedArray, 8)
console.log(kq)