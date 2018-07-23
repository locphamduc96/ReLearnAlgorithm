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
        for (let j = 0; j < n; j++) {
            if (arrCp[j] > arrCp[j + 1]) {
                let temp = arrCp[j]
                arrCp[j] = arrCp[j + 1]
                arrCp[j + 1] = temp
            }
        }
    }

    return arrCp
}

const InsertionSort = (arr) => {
    
    let arrCp = arr.slice() 
    let n = arr.length

    for (let i = 1; i < n; i++) {
        
        let value = arrCp[i]
        let position = i

        while (position > 0 && arrCp[position - 1]  > value) {
            arrCp[position] = arrCp[position - 1]
            position = position - 1
        }

        arrCp[position] = value
    }

    return arrCp
}

const MergeSort = (arr) => {

    let arrLength = arr.length

    if (arrLength === 1) {
        return arr
    }

    const arr1 = arr.slice(0, arrLength/2)
    const arr2 = arr.slice(arrLength/2, arrLength)

    //console.log(arr1, arr2)

    return Merge(MergeSort(arr1), MergeSort(arr2))
}

const Merge = (arr1, arr2) => {

    let arr = []

    while (arr1.length > 0 && arr2.length > 0) {

        if (arr1[0] > arr2[0]) {
            arr.push(arr2[0])
            arr2.splice(0, 1)
        } else {
            arr.push(arr1[0])
            arr1.splice(0, 1)
        }
    }

    while (arr1.length > 0) {
        arr.push(arr1[0])
        arr1.splice(0, 1)
    }

    while (arr2.length > 0) {
        arr.push(arr2[0])
        arr2.splice(0, 1)
    }

    return arr
}

const ShellSort = (arr) => {

    let arrCp = arr.slice()
    let n = arrCp.length
    let interval = 1

    while (interval < Math.round(n / 3)) {
        interval = interval*3 + 1
    }

    console.log(interval)

    while (interval > 0) {

        for (let outer = interval; outer < n; outer++) {

            let valueToInsert = arrCp[outer]
            let inner = outer

            while (inner > interval - 1 && arrCp[inner - interval] >= valueToInsert) {
                arrCp[inner] = arrCp[inner - interval]
                inner = inner - interval
            }

            arrCp[inner] = valueToInsert
        }

        interval = Math.round((interval - 1) / 3)
    }

    return arrCp
}

var quickSort = function (array, left, right) {

    let leftIndex = partition(array, left, right);

    if (left < leftIndex - 1) {
        quickSort(array, left, leftIndex - 1);
    }

    if (right > leftIndex) {
        quickSort(array, leftIndex, right);
    }

    return array;
}

var swap = function (array, left, right) {
    let temp;
    temp = array[left];
    array[left] = array[right];
    array[right] = temp;
}

var partition = function (array, left, right) {
    console.log(array)
    let pivotIndex = Math.floor((left + right) / 2);
    let pivot = array[pivotIndex];

    let leftIndex = left;
    let rightIndex = right;

    while (leftIndex <= rightIndex) {
        while (array[leftIndex] < pivot) {
            leftIndex++;
        }

        while (array[rightIndex] > pivot) {
            rightIndex--;
        }

        if (leftIndex <= rightIndex) {
            swap(array, leftIndex, rightIndex);
            leftIndex++;
            rightIndex--;
        }
    }
    return leftIndex;
}

const BinarySearch = (arr, findVal) => {

    let n = arr.length
    let lower = 0
    let higher = n - 1
    let found = false

    while (true) {

        let mid = Math.floor(lower + (higher - lower)/2)
        if (arr[mid] == findVal) {
            console.log(arr[mid])
            console.log(mid)
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

const InterpolationSearch = (arr, findVal) => {

    let n = arr.length
    let lower = 0
    let higher = n - 1
    let found = false

    while (true) {

        if (lower > higher) {
            console.log("Khong tim thay")
            return false
        }

        let mid = Math.round(lower + ((higher - lower)/(arr[higher] - arr[lower]))*(findVal - arr[lower]))
        console.log(lower, mid, higher)

        if (arr[mid] < findVal) {
            lower = mid + 1
        }
        if (arr[mid] > findVal) {
            higher = mid - 1
        }  

        if (arr[mid] == findVal) {
            console.log(arr[mid])
            console.log(mid)
            console.log("Tim thay")
            return true
        }
    }
}

const Fibonacci = (n) => {
    
    // let a = 1, b = 0, temp

    // while (n > 0) {

    //     temp = a
    //     a = a+b
    //     b = temp
    //     n--
    // }

    // return a

    if (n <= 1) {
        return 1
    }

    return Fibonacci(n - 1) + Fibonacci(n - 2)
}

const HanoiTower = (disk, nguon, temp, dich) => {
    if (disk == 1) {
        console.log(nguon + " " + dich)
    } else {
        HanoiTower(disk-1, nguon, dich, temp)
        HanoiTower(1, nguon, dich, temp)
        HanoiTower(disk-1, dich, temp, nguon)
    }
}

const Sum = (n) => {

    if (n == 1)
        return 1

    return n + Sum(n-1)
}

module.exports = {
    PrintArray: PrintArray,
    LinearSearch: LinearSearch,
    BubbleSort: BubbleSort,
    InsertionSort: InsertionSort,
    MergeSort: MergeSort,
    ShellSort: ShellSort,
    quickSort: quickSort,
    BinarySearch: BinarySearch,
    Fibonacci: Fibonacci,
    HanoiTower: HanoiTower,
    Sum: Sum,
    InterpolationSearch: InterpolationSearch
}