arr = [3, 8, -10, 23, 19, -4, -14, 27]
arr.sort((a, b) => a - b)
function absoluteMin(arr) {
    let res = []
    var min = Infinity
    for (i = 0; i < arr.length-1; i++) {
        diff = arr[i + 1] - arr[i]
        min = Math.min( diff,min)
    }
  
    for (i = 0; i < arr.length-1; i++) {
        diff=arr[i+1]-arr[i]
        if (min === diff) {
            res.push([arr[i], arr[i + 1]])
        }
    }
    return res
}

let a = absoluteMin(arr)
console.log(a)