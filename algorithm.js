const PrintArray = (arr) => {
    arr.forEach(element => {
        console.log(element)
    })
}

const LinearSearch = (arr, findVal) => {

    let i = 0
    for (i; i < arr.length; i++) {
        if (findVal === arr[i]) {
            return i + 1
        }
    }

    return false
}

const BubbleSort = (arr) => {

    let arrCp = arr.slice()
    let n = arr.length
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            if (arrCp[j] > arrCp[j + 1]) {
                let temp = arrCp[j]
                arrCp[j] = arrCp[j + 1]
                arrCp[j + 1] = temp
            }
        }
    }

    return arrCp
}

const BinarySearch = (arr, findVal) => {

    let n = arr.length
    let lower = 0
    let higher = n - 1
    let found = false

    while (true) {

        let mid = Math.round(lower + (higher - lower)/2)
        if (arr[mid] == findVal) {
            console.log("Tim thay")
            return true
        } 

        if (lower > higher) {
            console.log("Khong tim thay")
            return false
        }
        console.log(lower, mid, higher)

        if (arr[mid] < findVal) {
            lower = mid + 1
        }
        if (arr[mid] > findVal) {
            higher = mid - 1
        }  
    }
}

module.exports = {
    PrintArray: PrintArray,
    LinearSearch: LinearSearch,
    BubbleSort: BubbleSort,
    BinarySearch: BinarySearch
}