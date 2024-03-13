
let arr = [7, 2, 46, 9, 11, 34, 3, 2, 1]
function result(arr, k) {
    mp = new Map()

    for (i = 0; i < arr.length; i++) {
        if (mp.has(arr[i])) {
            mp.set(arr[i], mp.get(arr[i]) + 1)
        } else {
            mp.set(arr[i], 1)
        }
    }
    for (i = 0; i < arr.length; i++) {
        sum = k - arr[i]
  let res=[]
        if (mp.has(sum)) {
            res.push(sum,arr[i]);
            return res
        } else {
     
            return -1
        }
    }
}

let a = result(arr, 9)
console.log(a)