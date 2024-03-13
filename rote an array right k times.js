function rotateRight(arr, k) {


    for (i = 0; i < k; i++) {
        let last = arr.pop()
        arr.unshift(last)
    }
    return arr

}

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]


let a = rotateRight(arr, 3)
console.log(a)