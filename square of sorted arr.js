let arr = [-4, -1, 0, 2, 5]

function square(arr) {
    let s = 0
    let e = arr.length - 1
    let k = arr.length - 1
    let ans = []
    while (s <= e) {
        if (Math.abs(arr[s]) > Math.abs(arr[e])) {
            ans[k] = arr[s] * arr[s]
            s++
        } else {
            ans[k] = arr[e] * arr[e]
            e--
        }
        k--
    }
    return ans
}

let a=square(arr)
console.log(a)