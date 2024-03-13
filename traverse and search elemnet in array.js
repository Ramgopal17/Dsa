let arr = [23, 45, 6, 78, 9, 1, 78, 2, 9, 0]
let target = 85

function search(arr, target) {
    let idx
    let res = []
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            idx = i
           return idx
        }
}
    return -1
}
let a = search(arr, target)
console.log(a)
