n = 6, x = 13
arr = [1, 4, 45, 6, 10, 8]
function triplet(arr, n, x) {
    for (i = 0; i < n; i++) {
      let  curr = x - arr[i]
      let s=new Set()
        for (j = i+1; j < n; j++) {
      
            if(s.has(curr-arr[j])) {
                return 1
            }
            s.add(arr[j])
        }
    }
    return 0
}
let a = triplet(arr, n, x)
console.log(a)